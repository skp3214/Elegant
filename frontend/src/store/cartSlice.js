import { createSlice } from "@reduxjs/toolkit";
import cartService from "../api/cart.api.js";

const getAuthToken=()=>{
    return localStorage.getItem("authtoken");
}
const initialState = {
    cart: {
        userId: null,
        cartItems: [], 
    },
    authtoken: getAuthToken(),
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setUserId: (state, action) => {
            state.cart.userId = action.payload;
        },
        addProduct: (state, action) => {
            const productIndex = state.cart.cartItems.findIndex(
                (product) => product.productId === action.payload.productId
            );
            if (productIndex === -1) {
                state.cart.cartItems.push({
                    productId: action.payload.productId,
                    quantity: action.payload.quantity,
                });
            } else {
                state.cart.cartItems[productIndex].quantity += action.payload.quantity;
            }
            cartService.createCurrentUserCart(state.cart,state.authtoken).then((res) => {
                state.cart = res.data;
            });
        },
        removeProduct: (state, action) => {
            const productIndex = state.cart.cartItems.findIndex(
                (product) => product.productId == action.payload
            );
            if (productIndex !== -1) {
                state.cart.cartItems.splice(productIndex, 1);
            }
            cartService.updateCurrentUserCart(state.cart, state.authtoken).then((res) => {
                state.cart = res.data;
            });
        },
        clearCart: (state) => {
            state.cart.cartItems = [];
        },
    },
});

export const { addProduct, removeProduct, clearCart, setUserId } = cartSlice.actions;
export default cartSlice.reducer;