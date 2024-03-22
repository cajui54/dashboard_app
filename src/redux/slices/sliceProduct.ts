import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStockAs } from "../../interfaces/Stock";

interface IProduct {
  productSearch: IStockAs[];
}
const initialValues: IProduct = {
  productSearch: [],
};
const sliceProduct = createSlice({
  name: "product",
  initialState: initialValues,
  reducers: {
    setProducts(state, { payload }: PayloadAction<IStockAs[]>) {
      state.productSearch = payload;
      return state;
    },
  },
});

export const { setProducts } = sliceProduct.actions;
export const selectorProducts = (state: any) => state.product;
export default sliceProduct.reducer;
