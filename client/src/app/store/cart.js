import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsInCart: []
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload);
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(
                (dlc) => dlc.id !== action.payload
            );
        }
    }
});

const { reducer: cartReducer, actions } = cartSlice;
export const { setItemInCart, deleteItemFromCart } = actions;

export default cartReducer;
