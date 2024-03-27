import React, { FormEvent } from 'react'
import * as Styles from './SearchProduct.css';
import { FaSearch } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../../redux/slices/sliceProduct'; 
import useRequestProduct from '../../../hooks/useRequestProduct';

interface IFocusInput {
    status: boolean,
    classType: string,
}
const SearchProduct = () => { 
    const dispatch = useDispatch();
    const {products} = useRequestProduct();
    const {register, handleSubmit, setError, formState: {errors}} = useForm<{search: string}>({defaultValues: {search: ''}});    
    const [focusInput, setFocusInput] = React.useState<IFocusInput>({status: false, classType: ''});

    const handleSearchProduct = (data: {search: string}): void => {
        
        const regexProduct = new RegExp(`${data.search}`, "i");
        
        try {
            if(products.length > 0) {
                const searchProducts = products.filter(product => (
                    regexProduct.test(product.description as 'string')
                ))
                dispatch(setProducts(searchProducts));
            } else {
                setError("search", {type: "validate", message: 'Não há produto cadastrado!'})
            }
        } catch (e) {
            alert(`Ocorreu um erro inesperado! \n ${e}`);
        }
        
    }
    const handleReset = () => {
        setFocusInput({status: false, classType: ''});
        setError("search", {type: ''});
    }
    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setFocusInput({status: true, classType: 'focusP'});
    }
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        
        if(event.target.value.length === 0) {
            setFocusInput({status: false, classType: ''});
        }
    }

  return (
    <Styles.MainSearch>
        <form onSubmit={(e: FormEvent) => e.preventDefault()}>
            <Styles.InputContainer>
                <label>
                    <p className={focusInput.status ? focusInput.classType : ''}>
                        Pesquisar por produto:
                    </p>

                    <input
                        type="text"
                        {...register('search', {required: true, minLength: 2})}
                        onFocus={handleFocus}
                        onBlurCapture={handleBlur}
                    />

                    <Styles.ButtonsContainer>
                        <button type='submit' onClick={() => handleSubmit(handleSearchProduct)()} title='pesquisar produto'>
                            <FaSearch />
                        </button>
                        <button type="reset" onClick={handleReset} title='cancelar'>
                            <MdCancel/>
                        </button>
                    </Styles.ButtonsContainer>

                </label>
                {errors.search?.type === 'required' && <p className='isRequiredLable'>Digite o nome do produto!</p>}
                {errors.search?.type === 'minLength' && <p className='isRequiredLable'>Pesquisa deve conter ao menos 2 caracteres!</p>}
                {errors.search?.type === 'validate' && <p className='isRequiredLable'>{errors.search.message}</p>}
            </Styles.InputContainer>
        </form>
    </Styles.MainSearch>
  )
}

export default SearchProduct
