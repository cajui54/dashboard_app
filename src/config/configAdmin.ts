import { FaUsers, FaUserTie, FaUser, FaUserCog } from "react-icons/fa";
import { FaChalkboardUser  } from "react-icons/fa6";
import { IScreenInfo } from "../interfaces/ScreenInfo";

export const usersType: IScreenInfo[] = [
    {subTitle: 'Total de Usuário(s)',type: 'amount', svg: FaUsers, amount: 0},
    {subTitle: 'Comum', type: 'default', svg: FaUser, amount: 0},
    {subTitle: 'Financeiro', type: 'finance', svg: FaUserTie, amount: 0},
    {subTitle: 'Admin', type: 'admin', svg: FaUserCog, amount: 0},
    {subTitle: 'Estoquista', type: 'stock', svg: FaChalkboardUser  , amount: 0},
]
export const initialeStatesMessage = {
    status:false,
    message: '',
}