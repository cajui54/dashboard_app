import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStockAs } from "../../interfaces/Stock";
import { Profit } from "../../config/Profit";
import { log } from "console";

interface ICart {
    searchItems: IStockAs[] | [];
    searchResultLoading: boolean,
    itemsCart: IStockAs[] | [],
}
let initaleValues: ICart = {
    searchItems: [],
    searchResultLoading: false,
    itemsCart: [],
};
const sliceCart = createSlice({
    name: 'cart',
    initialState: initaleValues,
    reducers: {
        searchItems (state, {payload}: PayloadAction<IStockAs[] | []>) {
            state.searchItems = payload;
            return state;
        },
        updateItemsResult (state, {payload}: PayloadAction<boolean>) {
            state.searchResultLoading = payload;
            return state;
        },
        addCart (state, {payload}: PayloadAction<IStockAs>) {     
            state.itemsCart = [...state.itemsCart, payload];
            
            return state;

        }
    } 
})

export const { searchItems, updateItemsResult, addCart } = sliceCart.actions;

export const selectorCart = (state: any) => state.cart;

export default sliceCart.reducer;