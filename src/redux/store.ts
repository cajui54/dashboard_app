import { configureStore } from "@reduxjs/toolkit";
import sliceUser from "./slices/sliceUser";
import sliceCallback from "./slices/sliceCallback";
import sliceProduct from "./slices/sliceProduct";

const store = configureStore({
  reducer: {
    user: sliceUser,
    callfetch: sliceCallback,
    product: sliceProduct,
  },
});

export default store;
