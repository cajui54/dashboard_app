import {IUser} from '../../interfaces/User';
import { FaUserCheck, FaUserLock } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { BiSolidUserX } from "react-icons/bi";
import *  as Style from './ResultSearch.css';
import { useEffect, useState } from 'react';
import useRequestUser from '../../hooks/useRequestUser';
import { useDispatch } from 'react-redux';
import { getIdUser } from '../../redux/slices/sliceUser';


const ResultSearch = (datas: {id: string} | IUser) => {
  
    const dispatch = useDispatch();
    const {deleteUser} = useRequestUser();
    const [statusUser, SetStatusUser] = useState<boolean>();
    
    const handleDeleteUser = (_id: string, firstName: string) => {
      if(window.confirm(`Tem certeza que deseja excluir ${firstName}?`)) {
        deleteUser(_id); 
      }

    }
    const handleEditUser = (_id: string) => {

      dispatch(getIdUser({status: true, id: _id}));
      window.scroll({top: 650, behavior: 'smooth'});
      
    }

    useEffect(() => {
      'status' in datas && SetStatusUser(datas.status);
    }, [datas]);

    const handleStatusUser = (_status: boolean) => {
      if(_status) SetStatusUser(_status);
      else SetStatusUser(_status);
    }

  return (
    <Style.MainResultSearch>
      <h3>Resultado da Pesquisa: </h3>
      {datas && (
        <ul>
          { 'ra' in datas && (
            <li>
              <label>RA:</label>
              {datas.ra}
            </li>)}

          <li>
              <label>Nome:</label>
              {'firstName' in datas && <span>{datas.firstName}</span>}
              {'lastName' in datas && <span>{datas.lastName}</span>}
          </li>
          
          { 'login' in datas &&(
            <li>
              <label>Login:</label>
              {datas.login}
            </li>)}

          {'type' in datas && (
            <li>
              <label>Tipo:</label>
              {datas.type}
            </li>)}
          
          { 'status' in datas && (
              <li>
                <label>Status:</label> { statusUser ? <span className='activeUser'>Ativo</span> : <span className='blockUser'>Bloqueado</span>}
                { statusUser ? (
                  <button className='buttonActive' title='bloquear' onClick={() => handleStatusUser(false)}><FaUserCheck/></button>
                  ): (
                    <button className='buttonblock' title='desbloquear' onClick={() => handleStatusUser(true)}><FaUserLock/></button>
                  )
                }
              </li>
            )}

          <li>
            <button
              className='buttonEdit'
              title='editar usuário'
              onClick={() => handleEditUser(datas.id)}
              >
                <FaUserPen/>
              </button>

            { 'firstName'in datas && (<button 
              className='buttonDelete'
              title='deletar usuário'
              onClick={() => handleDeleteUser(datas.id, datas.firstName)}
              >
                <BiSolidUserX />
              </button>)}
          </li>
        </ul>
      )}
    </Style.MainResultSearch>
  )
}

export default ResultSearch
