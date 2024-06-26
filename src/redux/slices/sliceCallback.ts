import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ICallback {
  callFetchUser: boolean;
  callFetchProduct: boolean;
  closeResult: boolean;
  notFound: boolean;
}
const intialeValues: ICallback = {
  callFetchUser: false,
  callFetchProduct: false,
  closeResult: false,
  notFound: false,
};

const sliceCallback = createSlice({
  name: "callfetch",
  initialState: intialeValues,
  reducers: {
    setCallbackUser(state, { payload }: PayloadAction<boolean>) {
      state.callFetchUser = payload;
      return state;
    },
    setCallFetchProduct(state, { payload }: PayloadAction<boolean>) {
      state.callFetchProduct = payload;
      return state;
    },
    setCloseResultUser(state, { payload }: PayloadAction<boolean>) {
      state.closeResult = payload;
      return state;
    },
    setNotFound(state, { payload }: PayloadAction<boolean>) {
      state.notFound = payload;
      return state;
    },
  },
});

export const {
  setCallbackUser,
  setCloseResultUser,
  setCallFetchProduct,
  setNotFound,
} = sliceCallback.actions;

export const selectorCallback = (state: any) => state.callfetch;

export default sliceCallback.reducer;
