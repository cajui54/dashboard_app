import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStockAs } from "../../interfaces/Stock";
interface ICart {
    searchItems: IStockAs[] | [];
}
const initaleValues: ICart = {
    searchItems: [],
};
const sliceCart = createSlice({
    name: 'cart',
    initialState: initaleValues,
    reducers: {
        searchItems (state, {payload}: PayloadAction<IStockAs[] | []>) {
            state.searchItems = payload;
            return state;
        }
    } 
})

export const { searchItems } = sliceCart.actions;

export const selectorCart = (state: any) => state.cart;

export default sliceCart.reducer;