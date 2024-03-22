import { collection, getFirestore, getDocs, doc, deleteDoc, addDoc, updateDoc} from "firebase/firestore";
import { FirebaseApp, initializeApp } from "firebase/app";
import {useState, useEffect } from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { selectorCallback } from '../redux/slices/sliceCallback';
import { setCallbackUser, setCloseResultUser } from '../redux/slices/sliceCallback';
import { loginUser } from '../redux/slices/sliceUser';
import { firebaseConfig } from '../config/configFirebase';
import { ILoginInputs } from '../interfaces/Inputs';
import { messagesConfig } from '../config/configMessage';
import { useNavigate } from 'react-router-dom';
import { IMessage } from '../interfaces/Messages';
import { IUserInputs } from "../interfaces/Inputs";

const useRequestUser = () => {
  
  const navigateTo = useNavigate();
  const dispatchUser = useDispatch();
  const dispatchCallbackUser = useDispatch();
  const {callFetchUser, closeResult} = useSelector(selectorCallback);
  const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
  const [datas, setDatas] = useState<{id: string}[] | null>(null);
  const [isLoading, setIsLoading] = useState<IMessage>(messagesConfig.loading);
  const [error, setErros] = useState<IMessage>(messagesConfig.defaultConfig);
  const db = getFirestore(firebaseApp);
  
    const userCollectionRef = collection(db, 'users');

    const deleteUser = async (_id: string) => {

      try {
        const userDoc = doc(db, 'users', _id);
        await deleteDoc(userDoc);
        
        dispatchCallbackUser(setCallbackUser(true));
        dispatchCallbackUser(setCloseResultUser(false));

        alert('O usuário foi deletado com sucesso!');

      } catch(e) {
        alert('Ocorreu um error inesperado!');
      }
    }

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
    const updateUser = async <T extends {id: string}>(user: T) => {
      
      try {
        const userDoc = doc(db, 'users', user.id);
        
        await updateDoc(userDoc, user);

      } catch(e) {
        setErros({status: true, message: `${e}`});
      } finally {
        dispatchCallbackUser(setCallbackUser(true));
        alert('Usuário(a) atualizado com sucesso!');
      }
      
    }
    
    const addNewUser = async (datas: IUserInputs) => {
      
      try {  
        await addDoc(userCollectionRef, datas);
        
        dispatchCallbackUser(setCallbackUser(true));
        
      } catch(e) {
        alert(`Ocorreu um error inesperado! \n ${e}`);
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
            dispatchCallbackUser(setCallbackUser(false));
            
           }
            
        }   
        getUsers();
        
    }, [callFetchUser]);
    
    
  return {
    datas,
    findUser,
    isLoading,
    setIsLoading,
    error,
    deleteUser,
    addNewUser,
    updateUser,
  };
}

export default useRequestUser;
