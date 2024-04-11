import React from 'react'
import { useSelector } from 'react-redux';
import { selectorCart } from '../redux/slices/sliceCart';
import { IStockAs } from '../interfaces/Stock';

const useCartStorage = () => {
    const [itemsStorage, setItemsStorage] = React.useState<IStockAs[]>([]);
    const  {itemsCart} = useSelector(selectorCart);
   

    const saveStorage = async (items: IStockAs[] | []) => {
      try {
        
        sessionStorage.setItem('cart', JSON.stringify(items));

      } catch(error) {
        alert(`Ocorreu um erro inesperador no LocalStorage! \n${error}`);
      }
      
    }

    React.useEffect(() => {
      saveStorage(itemsCart);

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

  return { itemsStorage, saveStorage }
}

export default useCartStorage
