import { configureStore } from "@reduxjs/toolkit";
import sliceUser from "./slices/sliceUser";

const store = configureStore({
    reducer: {
        user: sliceUser,
    }
})

export default store;