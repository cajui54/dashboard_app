import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
    id: string,
    firstName: string,
    lastName: string,
    login: string,
    password: string,
    ra: string,
    status: boolean,
    type: string
}

const initialValue: IUser[] | {} = {};

const sliceUser =  createSlice({
    name: 'user',
    initialState: initialValue,
    reducers: {
        getAllUsers() {

        },
        loginUser(state, {payload}: PayloadAction<{id: string}>) {  
            if(payload) {
                state = payload;
            }
            return state;
        }
    },

});

export const {getAllUsers, loginUser} = sliceUser.actions;

export const selectorUser = (state: any) => state.user;

export default sliceUser.reducer;