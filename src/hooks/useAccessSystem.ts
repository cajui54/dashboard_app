import {useReducer} from 'react';
interface IAccessSystem {
    home: boolean,
    finance: boolean,
    stock: boolean,
    admin: boolean,
}
const adminAccess = {
    home: true,
    finance: true,
    stock: true,
    admin: true,
}
const userAccess = {
    home: true,
    finance: false,
    stock: true,
    admin: false,
}
const financeAccess = {
    home: true,
    finance: true,
    stock: true,
    admin: false,
}
type userType = 'default' | 'admin' | 'financer';

const accessSystemReducer = (state: IAccessSystem, payload: string) => {
    switch(payload) {
        case 'default' :
            return userAccess;
        case 'admin' :
            return adminAccess;
        case 'finance' : 
            return financeAccess;
        default :
            return state;
    }
}
const useAccessSystem = () => {
    const [accessState, dispatchAccess] = useReducer(accessSystemReducer, userAccess);

  return {accessState, dispatchAccess}
}

export default useAccessSystem
