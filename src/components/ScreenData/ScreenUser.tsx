import React from 'react';
import * as Style from './Screen.css';
import ErrorMessage from '../Messages/Error/ErrorMessage';
import { FaRegUserCircle } from "react-icons/fa";
import LoadingMessage from '../Messages/Loading/LoadingMessage';
import useStorage from '../../hooks/useStorage';

const ScreenUser = () => {
  const {user, loading } = useStorage('user');
  
  return (
    <Style.MainScreen>
      {
        user && Object.keys(user).length > 0 ? (
            <Style.InfoContainer>
              { loading ? (
                <LoadingMessage text='Carregando usuário'/>
              ) : (
                <Style.ScreenInfo>
                    <label>Usuário(a):</label>
                    <div>
                        <FaRegUserCircle />
                        <p>
                            <span>{user.firstName}</span>
                            <span>{user.lastName}</span> 
                        </p>
                    </div>
                </Style.ScreenInfo>)
              }
            </Style.InfoContainer>
        ) : (
            <ErrorMessage text='Ocorreu um erro, ao carregar dados do usuário!'/>
        )
      }
    </Style.MainScreen>
  )
}

export default ScreenUser
