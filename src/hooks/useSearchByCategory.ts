import {useEffect, useState} from 'react'
import useRequestProduct from './useRequestProduct';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/slices/sliceProduct';

const useSearchByCategory = () => {
    const dispatch =  useDispatch();
    const { products } = useRequestProduct();
    const [category, setCategory] = useState<string>('all');

    useEffect(() => {
        const searchByCategory = () => {
            if(products.length > 0) {
              const filterByCategory = products.filter((item) =>{ 
                if(category === "all") {
                  return item;
                } 
                return item.type === category;
              });
              
              dispatch(setProducts(filterByCategory));
            }
          }
          searchByCategory();
        
    }, [category, products]);

  return {
    category,
    setCategory
  }
}

export default useSearchByCategory
