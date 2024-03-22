import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/User";

interface ISliceUser {
  login: IUser | {};
  users: [] | { id: string }[];
  callFirebase: boolean;
  editUser: { status: boolean; id: string };
}
const initialValue: ISliceUser = {
  login: {},
  users: [],
  callFirebase: false,
  editUser: { status: false, id: "" },
};

const sliceUser = createSlice({
  name: "user",
  initialState: initialValue,
  reducers: {
    allUsers(state: ISliceUser, { payload }: PayloadAction<{ id: string }[]>) {
      state.users = payload;
      return state;
    },
    loginUser(state, { payload }: PayloadAction<{ id: string }>) {
      if (payload) {
        state.login = payload;
      }
      return state;
    },
    setCallFetchUser(state, { payload }: PayloadAction<boolean>) {
      state.callFirebase = payload;
      return state;
    },
    getIdUser(
      state,
      { payload }: PayloadAction<{ status: boolean; id: string }>
    ) {
      state.editUser = payload;

      return state;
    },
  },
});

export const { allUsers, loginUser, setCallFetchUser, getIdUser } =
  sliceUser.actions;

export const selectorUser = (state: any) => state.user;

export default sliceUser.reducer;
