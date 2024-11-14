import { configureStore } from "@reduxjs/toolkit";
import cart from './features/cart'
import register  from "./features/register";



export const store = configureStore({
    reducer:{
        handleCart : cart,
        registerUser : register,
    },
})

export default store