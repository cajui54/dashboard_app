import ScreenInfo from '../../components/ScreenInfo/ScreenInfo';
import * as Style from './Admin.css';
import { IScreenInfo } from "../../interfaces/ScreenInfo";
import useStorage from "../../hooks/useStorage";
import useRequestUser from "../../hooks/useRequestUser";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsers, selectorUser } from "../../redux/slices/sliceUser";
import { usersType } from "../../config/configAdmin";
import { IDefaultStates } from '../../interfaces/Admin';
import { initialeStatesMessage } from '../../config/configAdmin';
import SearchUser from './Search/SearchUser';
import TableContainer from '../../components/Table/TableContainer';
import ErrorMessage from '../../components/Messages/Error/ErrorMessage';


const Admin = () => {
  const {users} = useSelector(selectorUser);
  const [error, setError] = useState<IDefaultStates>(initialeStatesMessage);
  const [warning, setWarning] = useState<IDefaultStates>(initialeStatesMessage);
  const dispatch = useDispatch();
  const [initialeValues, setInitialeValues] = useState<IScreenInfo[]>(usersType);
  const {datas: datasUser, isLoading, deleteUser} = useRequestUser() ;
  
  
  const { saveAllDatas } = useStorage('users');

  const getAmountUsers = <T extends {type: string}>(_datas: T[]) => {
    const newValues = initialeValues.map((data) => {
      if(data.type === 'amount') data.amount = _datas.length;
      else if(data.type === 'default') data.amount = _datas.filter((element) => element.type === data.type).length;
      else if(data.type === 'admin') data.amount = _datas.filter((element) => element.type === data.type).length;
      else if(data.type === 'stock') data.amount = _datas.filter((element) => element.type === data.type).length;
      else if(data.type === 'finance') data.amount = _datas.filter((element) => element.type === data.type).length;
      return data
    });
    setInitialeValues(newValues);
  }

  useEffect(() => {
  try {
    if(sessionStorage) {
      saveAllDatas(datasUser, 'users');
      setError(initialeStatesMessage);
      setWarning(initialeStatesMessage);
    } else {
      throw Error ('Local Storage está desabilitado!');
    }  
    
  } catch(e) {
    if(datasUser) {
      dispatch(allUsers(datasUser)) ;
      setWarning({status: true, message: `${e}`});
    } else {
      setError({status: true, message: 'Ocorreu um error inesperado no Banco de Dados!'});
    } 
  }
  
  }, [datasUser]);

  useEffect(() => {
 
    try {
      if(sessionStorage) {
        const datas = sessionStorage.getItem('users');
        const dataJSON = datas && JSON.parse(datas);
        dataJSON && getAmountUsers(dataJSON);
        setError(initialeStatesMessage);
        setWarning(initialeStatesMessage);
      } else {
        throw new Error('Ocorreu um erro no LocalStorage');
      }

    } catch(e) {

      if (users.length > 0) {
        getAmountUsers(users);
        setWarning({status: true, message: `LocalStorage desabilitado \n ${e}`});
        return;
      } else if(users.length === 0) {
        setInitialeValues(usersType);
        setError({status: true, message: `${e} \n Ocorreu um erro no banco de dados`});
      } 
    }

  }, [datasUser]);

  
  return (
    <Style.MainAdmin>
      <ScreenInfo datas={initialeValues} titleMain='Tipos de usuários:' error={error} warning={warning}/>

      <main>
        <Style.ContainerTable>
          <SearchUser/>
          { datasUser ? (
            <TableContainer datas={datasUser} isLoading={isLoading} deleteUser={deleteUser}/>
          ): (
            <ErrorMessage text={'Ocorreu um error no banco de dados!'}/>
          )}
        </Style.ContainerTable>

        <form>
          <h1>Hello</h1>
        </form>
      </main>
    </Style.MainAdmin>
  )
}

export default Admin
