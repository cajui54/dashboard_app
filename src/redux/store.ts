import { configureStore } from "@reduxjs/toolkit";
import sliceUser from "./slices/sliceUser";
import sliceCallback from "./slices/sliceCallback";

const store = configureStore({
    reducer: {
        user: sliceUser,
        callfetch: sliceCallback,
    }
})

export default store;