import React, { useEffect, useState } from "react";
import {
  collection,
  getFirestore,
  getDocs,
  doc,
  deleteDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { FirebaseApp, initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/configFirebase";
import { IStockAs, IValuesDefault } from "../interfaces/Stock";
import { IMessage } from "../interfaces/Messages";
import { messagesConfig } from "../config/configMessage";
import { useDispatch, useSelector } from "react-redux";
import { setCallFetchProduct } from "../redux/slices/sliceCallback";
import { selectorCallback } from "../redux/slices/sliceCallback";
import { ISell } from "../interfaces/Finance";

const useRequestFinance = () => {
  const [dataFinance, setDataFinance] = useState<IStockAs[]>([]);
  const [isLoading, setIsLoading] = useState<IMessage>(
    messagesConfig.defaultConfig
  );
  const [error, setError] = useState<IMessage>(messagesConfig.defaultConfig);
  const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "finance");

  const addNewSell = async (data: ISell) => {
    try {
      await addDoc(userCollectionRef, data);
    } catch (error) {
      alert(`Ocorreu um erro inesperado! \n ${error}`);
    }
  };
  useEffect(() => {
    try {
      const getDataFinance = async () => {
        setIsLoading(messagesConfig.loading);
        const response = await getDocs(userCollectionRef);

        const datas = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setDataFinance(datas);
      };
      getDataFinance();
    } catch (error) {
      setError({
        status: true,
        message: `Ocorreu um erro inesperado! \n ${error}`,
      });
    } finally {
      setIsLoading(messagesConfig.defaultConfig);
    }
  }, []);
  return { dataFinance, addNewSell, isLoading, error };
};

export default useRequestFinance;
