import React from 'react'
import * as Styles from './SearchSell.css';
import { IoBeerOutline } from "react-icons/io5";
import { FaSearchDollar } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import ErrorMessage from '../../../components/Messages/Error/ErrorMessage';
import {useForm} from 'react-hook-form';
import { FaArrowRotateLeft } from 'react-icons/fa6';
import useSearchByDescription from '../../../hooks/useSearchByDescription';
interface IClassFocus {
    classP: "" | "focusInputP" | "errorInput"
}
interface IDataInput {
    search: string
}
const SearchSell = () => {
    const {setInput, resetStorage } = useSearchByDescription();
    const {register, resetField, setError, clearErrors, handleSubmit, formState: {errors}} = useForm<IDataInput>({defaultValues: {search: ""}});
    const [classType, setClassFocus] = React.useState<IClassFocus>({classP: ""});
    const [resetAll, setResetAll] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    
    const handleFocus = () => {
        setClassFocus({classP: 'focusInputP'});
    }
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        if(event.target.value.length === 0) {
            setClassFocus({classP: ''});
        }
    }
    const handleReset = () => {
        clearErrors("search");
        setIsLoading(false);
        resetStorage();
    }
    const handleSearchSubmit = (data: IDataInput) => {
        console.log(data);
        setInput(data.search);
        //setError("search", {type: "validate", message: `O produto ${data.search} não foi encontrado!`})
        setResetAll(true);
        setIsLoading(true);
        
    }
    const prevSubmit = () => {
        handleSubmit(handleSearchSubmit)();
    }
    React.useEffect(() => {
        if(errors.search?.type === 'required') {
            setClassFocus({classP: "errorInput"});
        }
        if(resetAll) {
            setTimeout(() => {
                setResetAll(false);
                resetField("search");
                setClassFocus({classP: ""});
                setIsLoading(false);
            }, 3000)
        }
        
    }, [errors, resetAll]);

  return (
    <Styles.SearchMain>
      <Styles.ContainerForm>
        <form onSubmit={(e: React.FormEvent) => e.preventDefault()}>
            <label className={`${classType.classP}`}>
                <p>Pesquisar Produto:</p>
                <IoBeerOutline />

                <input
                    type="text"
                    onFocus={handleFocus}
                    onBlurCapture={handleBlur}
                    {...register('search', {required: true})}
                />

                <span className={errors.search?.type === 'required' ? 'isRequiredAsteristic' : ''}>
                    *
                </span>
                { errors.search?.type === 'required' && <p className='isRequiredLable'>Campo Pesquisa é obrigatório!</p>}
            </label>
            <Styles.ContainerButtons>
                {!isLoading && (
                    <button title='Pesquisar' type='submit' onClick={prevSubmit}>
                        <FaSearchDollar />
                    </button>
                )}
                
                { isLoading && (
                    <button title='Carregando' disabled>
                      <FaArrowRotateLeft className="loadingArrow" />
                    </button>
                )}
                    

                <button title='Cancelar' type='reset' onClick={handleReset}>
                    <MdCancel />
                </button>
            </Styles.ContainerButtons>
            { errors.search?.type === "validate" && (
                <div className='ContainerMessage'>
                    <ErrorMessage text={`${errors.search.message}`}/>
                </div>
            )}
        </form>
      </Styles.ContainerForm>
      
    </Styles.SearchMain>
  )
}

export default SearchSell
