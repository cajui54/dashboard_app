import {useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/slices/sliceUser';
import { FirebaseApp, initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { firebaseConfig } from '../config/configFirebase';
import { ILoginInputs } from '../interfaces/Inputs';
import { messagesConfig } from '../config/configMessage';
import { useNavigate } from 'react-router-dom';
import { IMessage } from '../interfaces/Messages';

const useRequestUser = () => {
  const navigateTo = useNavigate();
  const dispatchUser = useDispatch();
  const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
  const [datas, setDatas] = useState<{id: string}[] | null>(null);
  const [isLoading, setIsLoading] = useState<IMessage>(messagesConfig.loading);
  const [error, setErros] = useState<IMessage>(messagesConfig.defaultConfig);
  const db = getFirestore(firebaseApp);
  
    const userCollectionRef = collection(db, 'users');

    const findUser = async (user: ILoginInputs) => {
    
      try {
        if(datas) {
          const userFound: {id: string} | undefined = datas.find((data: any) => (data.login === user.login && data.password === user.password));
          
          if(userFound) {
            dispatchUser(loginUser(userFound));
            sessionStorage && sessionStorage.setItem('user', JSON.stringify(userFound));
            navigateTo('/main/home');
            error.status && setErros(messagesConfig.defaultConfig);

          } else {
            throw  'Login ou Senha inválido(s)';
          }

        } else {
          throw  'Ocorreu um Error no banco de dados!'
        }

      } catch(e) {
        setErros({status: true, message: `${e}`});
      }
      
    }

    useEffect(() => {
        const getUsers = async () => {

           try {
            setIsLoading({status: true, message: 'Carregrando...'});

            const reponseFirebase = await getDocs(userCollectionRef);

            const datasFirestore = reponseFirebase.docs.map((doc) => ({...doc.data(), id: doc.id}));
            
            setDatas(datasFirestore);
            
           } catch(e) {

            setErros({status: true, message: `${e}`});
            
           } finally {

            setIsLoading(messagesConfig.defaultConfig);
            
           }
            
        }   
        getUsers();
    }, []);
    
    
  return {
    datas,
    findUser,
    isLoading,
    setIsLoading,
    error,
  };
}

export default useRequestUser;
