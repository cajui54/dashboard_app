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
import { ItemsSell } from "../interfaces/Finance";
import { Profit } from "../config/Profit";

const useRequestProduct = () => {
  const { convertToNumber } = new Profit();
  const [products, setProducts] = useState<IStockAs[] | []>([]);
  const dispatch = useDispatch();
  const { callFetchProduct } = useSelector(selectorCallback);
  const [isLoading, setIsLoading] = useState<IMessage>(
    messagesConfig.defaultConfig
  );
  const [error, setError] = useState<IMessage>(messagesConfig.defaultConfig);
  const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);

  const userCollectionRef = collection(db, "products");

  const updateAmountProducts = async (itemsCart: ItemsSell[]) => {
    const idsItemsCart = itemsCart.map((item) => item.id);
    console.log(itemsCart);

    let datas = {};
    products.forEach((_item) => {
      if (idsItemsCart.includes(_item.id.toString())) {
        const _accAmount = itemsCart.find((itemCart) => {
          if (itemCart.id === _item.id.toString()) {
            return itemCart.amountItems;
          }
        });

        datas = {
          ..._item,
          amount:
            convertToNumber(_item.amount) -
            convertToNumber(_accAmount ? _accAmount.amountItems : 0),
        };
        editProduct(datas);
      }
    });
    console.log(datas);
  };
  const addNewProduct = async (product: IValuesDefault) => {
    try {
      await addDoc(userCollectionRef, product);
      dispatch(setCallFetchProduct(true));
    } catch (error) {
      alert(`Ocorreu um erro inesperado! \n ${error}`);
    }
  };
  const deleteProduct = async (id: string) => {
    try {
      const productDoc = doc(db, "products", id);
      await deleteDoc(productDoc);
      dispatch(setCallFetchProduct(true));
    } catch (error) {
      alert(`Ocorreu um error ao deletar o produto! \n ${error}`);
    }
  };
  const editProduct = async (data: any) => {
    try {
      const productDoc = doc(db, "products", data.id);

      await updateDoc(productDoc, data);

      alert("Produto foi atualizado com sucesso!");
      dispatch(setCallFetchProduct(true));
    } catch (error) {
      alert(`Ocorreu um error inesperado ao editar o produto! \n ${error}`);
    }
  };
  const editProfitProduct = async (item: IStockAs) => {
    try {
      const productEditDoc = doc(db, "products", item.id.toString());

      await updateDoc(productEditDoc, item);
      dispatch(setCallFetchProduct(true));
    } catch (error) {
      alert(`Ocorreu um error ao aterar o lucro`);
    }
  };
  useEffect(() => {
    try {
      const getProducts = async () => {
        setIsLoading(messagesConfig.loading);
        const responde = await getDocs(userCollectionRef);

        const productsFirebase = responde.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setProducts(productsFirebase);
      };
      getProducts();
    } catch (e) {
      setError({
        status: true,
        message: `Ocorreu um erro inesperado! \n ${e}`,
      });
    } finally {
      setIsLoading(messagesConfig.defaultConfig);
      dispatch(setCallFetchProduct(false));
    }
  }, [callFetchProduct]);

  return {
    products,
    isLoading,
    error,
    addNewProduct,
    deleteProduct,
    editProduct,
    editProfitProduct,
    updateAmountProducts,
  };
};

export default useRequestProduct;
