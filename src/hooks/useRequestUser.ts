import {useState, useEffect} from 'react'
import { FirebaseApp, initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { firebaseConfig } from '../config/configFirebase';

const useRequestUser = () => {
  const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
  const [datas, setDatas] = useState<null | {}>(null);
  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, 'users');
  
    useEffect(() => {
        const getUsers = async () => {
            const reponseFirebase = await getDocs(userCollectionRef);

            const datasFirestore = reponseFirebase.docs.map((doc) => ({...doc.data(), id: doc.id}));

            setDatas(datasFirestore);
            
        }   
        getUsers();
    }, []);

  return {datas};
}

export default useRequestUser;
