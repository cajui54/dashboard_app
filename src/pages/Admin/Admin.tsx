import { FaUsers, FaUserTie, FaUser, FaUserCog } from "react-icons/fa";
import ScreenInfo from '../../components/ScreenInfo/ScreenInfo';
import * as Style from './Admin.css';
import { IScreenInfo } from "../../interfaces/ScreenInfo";
import useStorage from "../../hooks/useStorage";
import useRequestUser from "../../hooks/useRequestUser";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsers, selectorUser } from "../../redux/slices/sliceUser";

const usersType: IScreenInfo[] = [
  {subTitle: 'Total de Usuário(s)',type: 'amount', svg: FaUsers, amount: 0},
  {subTitle: 'Comum', type: 'default', svg: FaUser, amount: 0},
  {subTitle: 'Financeiro', type: 'finance', svg: FaUserTie, amount: 0},
  {subTitle: 'Admin', type: 'admin', svg: FaUserCog, amount: 0},
]

const Admin = () => {
  const {users} = useSelector(selectorUser);
  const [error, setError] = useState<{status: boolean, message: string}>({status: false, message: ''});
  const [warning, setWarning] = useState<{status: boolean, message: string}>({status: false, message: ''});
  const dispatch = useDispatch();
  const [initialeValues, setInitialeValues] = useState<IScreenInfo[]>(usersType);
  const {datas: datasUser} = useRequestUser() ;
  const { saveAllDatas } = useStorage('users');

  const getAmountUsers = <T extends {type: string}>(_datas: T[]) => {
    const newValues = initialeValues.map((data) => {
      if(data.type === 'amount') data.amount = _datas.length;
      else if(data.type === 'default') data.amount = _datas.filter((element) => element.type === data.type).length;
      else if(data.type === 'admin') data.amount = _datas.filter((element) => element.type === data.type).length;
      return data
    });
    setInitialeValues(newValues);
  }

  useEffect(() => {
  try {
    if(!sessionStorage) {
      saveAllDatas(datasUser, 'users');
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
    const t = false;
    //sessionStorage
    
    if(t) {
      const datas = sessionStorage.getItem('users');
      const dataJSON = datas && JSON.parse(datas);
      dataJSON && getAmountUsers(dataJSON);

    } else if (users.length > 0) {
      getAmountUsers(users);
      
    } else if (users.length === 0) {
      setInitialeValues(usersType);
    }
  }, []);
  
  return (
    <Style.MainAdmin>
      <ScreenInfo datas={initialeValues} titleMain='Tipos de usuários:' error={error}/>
    </Style.MainAdmin>
  )
}

export default Admin
