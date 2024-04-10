import React from 'react'
import { useSelector } from 'react-redux';
import { selectorCart } from '../redux/slices/sliceCart';
import { IStockAs } from '../interfaces/Stock';
const useCartStorage = () => {
    const  {itemsCart} = useSelector(selectorCart);
    const [itemsStorage, setItemsStorage] = React.useState<IStockAs[]>([]);
  
    React.useEffect(() => {
      const saveStorage = async () => {
        try {

          sessionStorage.setItem('cart', JSON.stringify(itemsCart));

        } catch(error) {
          alert(`Ocorreu um erro inesperador no LocalStorage! \n${error}`);
        }
        
      }
      saveStorage();

    }, [itemsCart]);

    React.useEffect(() => {
      const loadingStorage = async () => {
        try {
          const getItems =  sessionStorage.getItem('cart');
          const storageDatas = getItems ? JSON.parse(getItems) : [];
          setItemsStorage(storageDatas);
          
        } catch(error) {
          alert(`Ocorreu um erro inesperador no LocalStorage! \n${error}`);
        }
        
      }
      loadingStorage();
      
    }, [itemsCart]);

  
    
  return { itemsStorage }
}

export default useCartStorage
