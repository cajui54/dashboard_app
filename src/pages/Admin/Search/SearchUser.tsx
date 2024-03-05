import * as Style from './SearchUser.css';
import { MdPersonSearch, MdCancel } from "react-icons/md";
import { FaUsersRectangle } from "react-icons/fa6";
import * as StyleMain from '../../Main/Main.css';
import { useForm, SubmitHandler  } from 'react-hook-form';
import useRequestUser from '../../../hooks/useRequestUser';
import { useState } from 'react';
import { IMessage } from '../../../interfaces/Messages';
import { messagesConfig } from '../../../config/configMessage';
import ErrorMessage from '../../../components/Messages/Error/ErrorMessage';
import ResultSearch from '../../../components/ResultSearch/ResultSearch';
import {IUser} from '../../../interfaces/User';
import { useDispatch, useSelector } from 'react-redux';
import { selectorCallback } from '../../../redux/slices/sliceCallback';
import { setCloseResultUser } from '../../../redux/slices/sliceCallback';

interface IInputSearch {
  search: string,
}

const SearchUser = () => {
  const DispatchCallback = useDispatch();
  const { closeResult } = useSelector(selectorCallback);
  const [messageError, setMessageError] = useState<IMessage>(messagesConfig.defaultConfig);
  const { datas: datasUsers } = useRequestUser();
  const { register, handleSubmit, formState: {errors}} = useForm<IInputSearch>();
  const [showUser, setShowUser] = useState<null | IUser | {id: string}>(null);
  
  const handleReset = () => {
    setMessageError(messagesConfig.defaultConfig);
    setShowUser(null);
  }

  const onSubmit: SubmitHandler<IInputSearch> = (data) => {
    try {
      if(datasUsers) {
        const getUser = datasUsers.find((user: any) => user.ra === data.search.toUpperCase());
        
        if(getUser) {
          setShowUser({...getUser});
          
          DispatchCallback(setCloseResultUser(true));
          setMessageError(messagesConfig.defaultConfig);
        } else {
          throw Error('Usuário não encontrado!');
        }

      } else {
        throw Error;
      }
    } catch(e) {
      setMessageError({status: true, message: `${e}`});
    }
    
  }

  return (
    <Style.SearchMain>
      <h2>Buscar Usuário(a):</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <StyleMain.LabelInput>
          <span>Código do usuário:</span>
          <FaUsersRectangle/>

          <input
            type="text"
            maxLength={4}
            {...register('search', {required: true, minLength: 4})}
            placeholder='Digite o código'
          />

          {errors.search?.type === 'required' && <p>Você não preencheu o campo código!</p>}
          {errors.search?.type === 'minLength' && <p>Campo deve conter 4 caracteres</p>}
          
        </StyleMain.LabelInput>

        <Style.ContainerButtons>
          <button type='submit'>
            <MdPersonSearch/>
          </button>
          <button type='reset' onClick={handleReset}>
            <MdCancel/>
          </button>
        </Style.ContainerButtons>

      </form>
      { messageError.status && <ErrorMessage text={messageError.message}/> }
      { closeResult && showUser && <ResultSearch {...showUser}/>}
    </Style.SearchMain>
  )
}

export default SearchUser
