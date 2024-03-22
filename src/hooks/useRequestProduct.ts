import React, { useEffect, useState } from 'react'
import { collection, getFirestore, getDocs, doc, deleteDoc, addDoc, updateDoc} from "firebase/firestore";
import { FirebaseApp, initializeApp } from "firebase/app";
import { firebaseConfig } from '../config/configFirebase';
import { IStockAs } from '../interfaces/Stock';
import { IMessage } from '../interfaces/Messages';
interface IFirebase {
    id: string
}
const useRequestProduct = () => {
    const [products, setProducts] = useState<IStockAs[] | []>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<IMessage>({status: false, message: ''});
    const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
    const db = getFirestore(firebaseApp);

    const userCollectionRef = collection(db, 'products');

    useEffect(() => {
        try {
            const getProducts = async () => {
                setIsLoading(true);
                const responde = await getDocs(userCollectionRef);
    
                const productsFirebase = responde.docs.map((doc) => ({...doc.data(), id: doc.id}));
                
                setProducts(productsFirebase);
            }
            getProducts();
        } catch (e) {
            setError({status: true, message: `Ocorreu um erro inesperado! \n ${e}`});
        } finally {
            setIsLoading(false);
        }
     
        
    }, []);

  return {products, isLoading, error};
}

export default useRequestProduct
