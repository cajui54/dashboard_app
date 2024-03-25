import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStockAs } from "../../interfaces/Stock";

interface IProduct {
  productSearch: IStockAs[];
  idProduct: string | null,
}
const initialValues: IProduct = {
  productSearch: [],
  idProduct: null,
};
const sliceProduct = createSlice({
  name: "product",
  initialState: initialValues,
  reducers: {
    setProducts(state, { payload }: PayloadAction<IStockAs[]>) {
      state.productSearch = payload;
      return state;
    },
    setIdProduct (state, {payload}: PayloadAction<string | null>) {
      state.idProduct = payload;
      return state;
    }
  },
});

export const { setProducts, setIdProduct } = sliceProduct.actions;
export const selectorProducts = (state: any) => state.product;
export default sliceProduct.reducer;
