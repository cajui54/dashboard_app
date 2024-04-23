import {useState, useEffect} from 'react'
import useRequestProduct from './useRequestProduct';
import { useDispatch } from 'react-redux';
import { searchItems, updateItemsResult } from '../redux/slices/sliceCart';
import { IStockAs } from '../interfaces/Stock';


const useSearchByDescription = () => {
    const dispatchCart = useDispatch();
    const { products } = useRequestProduct();
    const [input, setInput] = useState<null | string>(null);

    const resetStorage = () => {
        try {
            sessionStorage.setItem('cart_prev', JSON.stringify([]));
            dispatchCart(updateItemsResult(true));
        } catch (error) {
            alert(`Ocorreu um error ao resetar Storage \n ${error}`);
        }
        
    }
    const updateStorage = (items: IStockAs[]) => {
        try {
            sessionStorage.setItem('cart_prev', JSON.stringify(items));
        } catch (error) {
            alert(`Ocorreu um erro inespado no update prev_cart`)
        } finally {
            dispatchCart(updateItemsResult(true));
        }
    }

    useEffect(() => {
        try {
            if(input) {
                const searchRegex = new RegExp(input, "i");
                
                const getItems = products.length > 0 ? (
                    products.filter((item) => searchRegex.test(item.description as 'string'))
                ) : ([]);
                dispatchCart(updateItemsResult(true));
                
                sessionStorage.setItem('cart_prev', JSON.stringify(getItems));
            }
        } catch(error) {
            alert(`Ocorreu um erro inesperado! \n ${error}`);
        } finally {
            setInput(null);
        }
    }, [input]);

  return {
    setInput,
    resetStorage,
    updateStorage
  }
}

export default useSearchByDescription
