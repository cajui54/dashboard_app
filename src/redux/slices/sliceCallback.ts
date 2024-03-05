import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ICallback {
    callFetchUser: boolean,
    closeResult: boolean,
}
const intialeValues: ICallback = {
    callFetchUser: false,
    closeResult: false,
}

const sliceCallback = createSlice({
    name: 'callfetch',
    initialState: intialeValues,
    reducers: {
        setCallbackUser (state, {payload}: PayloadAction<boolean>) {
            state.callFetchUser = payload;
            return state;
        },
        setCloseResultUser (state, {payload}: PayloadAction<boolean>) {
            state.closeResult = payload;
            return state;
        }
    }
});

export const { setCallbackUser, setCloseResultUser } = sliceCallback.actions;

export const selectorCallback = (state: any) => state.callfetch;

export default sliceCallback.reducer;