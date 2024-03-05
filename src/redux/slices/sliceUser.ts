import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IUser} from '../../interfaces/User';
interface ISliceUser {
    login: IUser | {};
    users: [] | {id: string}[];
    callFirebase: boolean;
}
const initialValue: ISliceUser = {
    login: {},
    users: [],
    callFirebase: false,
};

const sliceUser =  createSlice({
    name: 'user',
    initialState: initialValue,
    reducers: {
        allUsers(state: ISliceUser, {payload}: PayloadAction<{id: string}[]>) {  
            state.users = payload;
            return state;
        },
        loginUser(state, {payload}: PayloadAction<{id: string}>) {  
            if(payload) {
                state.login = payload;
            }
            return state;
        },
        setCallFetchUser (state, {payload}: PayloadAction<boolean>) {
            state.callFirebase = payload
            return state;
        }
    },

});

export const {allUsers, loginUser, setCallFetchUser} = sliceUser.actions;

export const selectorUser = (state: any) => state.user;

export default sliceUser.reducer;