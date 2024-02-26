import {useReducer} from 'react';
interface IAccessSystem {
    home: boolean,
    finance: boolean,
    stoch: boolean,
    admin: boolean,
}
const adminAccess = {
    home: true,
    finance: true,
    stoch: true,
    admin: true,
}
const userAccess = {
    home: true,
    finance: false,
    stoch: true,
    admin: false,
}
const financeAccess = {
    home: true,
    finance: true,
    stoch: true,
    admin: false,
}
type userType = 'default' | 'admin' | 'financer';

const accessSystemReducer = (state: IAccessSystem, payload: string) => {
    switch(payload) {
        case 'default' :
            return userAccess;
        case 'admin' :
            return adminAccess;
        case 'financer' : 
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
