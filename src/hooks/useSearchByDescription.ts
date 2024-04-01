import {useState, useEffect} from 'react'
import useRequestProduct from './useRequestProduct';
import { useDispatch } from 'react-redux';
import { searchItems } from '../redux/slices/sliceCart';
import { IStockAs } from '../interfaces/Stock';
const useSearchByDescription = () => {
    const dispatchCart = useDispatch();
    const { products } = useRequestProduct();
    const [input, setInput] = useState<null | string>(null);
    
    useEffect(() => {
        try {
            if(input) {
                const searchRegex = new RegExp(input, "i");
                
                const getItems = products.length > 0 ? (
                    products.filter((item) => searchRegex.test(item.description as 'string'))
                ) : ([]);
                dispatchCart(searchItems(getItems));
            }
        } catch(error) {
            alert(`Ocorreu um erro inesperado! \n ${error}`);
        } finally {
            setInput(null);
        }
    }, [input]);
  return {
    setInput,
  }
}

export default useSearchByDescription
