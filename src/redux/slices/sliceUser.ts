import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IUser} from '../../interfaces/User';
interface ISliceUser {
    login: IUser | {};
    users: [] | {id: string}[];
}
const initialValue: ISliceUser = {
    login: {},
    users: []
};

const sliceUser =  createSlice({
    name: 'user',
    initialState: initialValue,
    reducers: {
        allUsers(state: ISliceUser, {payload}: PayloadAction<{id: string}[]>): any {  
            state.users = payload;
            return state;
        },
        loginUser(state, {payload}: PayloadAction<{id: string}>) {  
            if(payload) {
                state.login = payload;
            }
            return state;
        }
    },

});

export const {allUsers, loginUser} = sliceUser.actions;

export const selectorUser = (state: any) => state.user;

export default sliceUser.reducer;