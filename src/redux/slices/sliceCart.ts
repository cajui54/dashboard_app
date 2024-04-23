import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStockAs } from "../../interfaces/Stock";
import { Profit } from "../../config/Profit";
import { getItemsStorage } from "../../config/SessionStorage";

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
            const {converToFloat, convertToNumber} = new Profit();
            
            if(state.itemsCart.length > 0) {
                const getIds = state.itemsCart.map((item) => item.id);

                if(getIds.includes(payload.id)) {
                    state.itemsCart = state.itemsCart.map((item) => {
    
                        if(item.id === payload.id) {
                            
                            return {
                                ...item,
                                accPrice: converToFloat(item.accPrice) + converToFloat(payload.accPrice),
                                amountItems: convertToNumber(item.amountItems) + convertToNumber(payload.amountItems),
                                amount: convertToNumber(item.amountItems) + convertToNumber(payload.amountItems),
                            }
                        }
                        return item;
                         
                    });
                    
                    return state;  

                } else {
                    state.itemsCart = [...state.itemsCart, payload];
                    return state; 
                }
                              
            } 
         
            state.itemsCart = [...state.itemsCart, payload];
            return state;
        },
        clearCart(state, {payload}: PayloadAction<[]>) {
            state.itemsCart = payload;
            return state;
        },
        removeItemCart(state, {payload}: PayloadAction<string>) {
            const newItems = state.itemsCart.filter((_item)=> {
                return _item.id !== payload;
            });
            state.itemsCart = newItems;
            return state;
        }
    } 
})

export const { searchItems, updateItemsResult, addCart, clearCart, removeItemCart } = sliceCart.actions;

export const selectorCart = (state: any) => state.cart;

export default sliceCart.reducer;