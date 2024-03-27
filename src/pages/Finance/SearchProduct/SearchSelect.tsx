import React from 'react';
import * as Styles from './SearchProduct.css';
import useRequestCategory from '../../../hooks/useRequestCategory';
import ErrorMessage from '../../../components/Messages/Error/ErrorMessage';
import { FaArrowRotateLeft } from "react-icons/fa6";
import {useForm, useWatch} from "react-hook-form";
import useSearchByCategory from '../../../hooks/useSearchByCategory';
interface IType  {
    type: string,
  }
const SearchSelect = () => {
    const {setCategory} = useSearchByCategory();
    const {categories, categoriesError, categoriesLoading} = useRequestCategory();
    const {register, handleSubmit, control } = useForm<{type: string}>({defaultValues: {type: 'all'}});
    const typeSelect = useWatch<IType>({control, name: 'type'});
    
    React.useEffect(() => {
        setCategory(typeSelect);
    }, [typeSelect])
    
  return (
    <Styles.SelectContainer>
      { !categoriesError.status ? (
        <>
            <select {...register('type')} defaultValue='all' >
                { !categoriesLoading.status ? (
                    <>
                        <option value='all'>Todos</option>
                        { categories && (
                            categories.map((category, index) => (
                                <option key={index} value={category.type}>{category.value}</option>
                            )))
                        }
                    </>
                    ): (
                        <option value="" disabled>Carregando...</option>
                    )
                }
            </select>
            { categoriesLoading.status && <FaArrowRotateLeft />}
        </>
      ) :(
        <ErrorMessage text={`Ocorreu um error inesperado ! ${categoriesError.message}`}/>
      )

      }
     
    </Styles.SelectContainer>
  )
}

export default SearchSelect
