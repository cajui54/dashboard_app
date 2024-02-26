import { FaUsers, FaUserTie, FaUser, FaUserCog } from "react-icons/fa";
import ScreenInfo from '../../components/ScreenInfo/ScreenInfo';
import * as Style from './Admin.css';
import { IScreenInfo } from "../../interfaces/ScreenInfo";

const usersType: IScreenInfo[] = [
  {subTitle: 'Total de Usuário(s)', svg: FaUsers, amount: 1},
  {subTitle: 'Comum', svg: FaUser, amount: 1},
  {subTitle: 'Financeiro', svg: FaUserTie, amount: 1},
  {subTitle: 'Admin', svg: FaUserCog, amount: 1},
]
const Admin = () => {
  
  
  return (
    <Style.MainAdmin>
      <ScreenInfo datas={usersType} titleMain='Tipos de usuários:'/>
    </Style.MainAdmin>
  )
}

export default Admin
