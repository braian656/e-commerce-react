import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name:'cart',

    initialState : {
    items:  [],
    message: '',

    },

    reducers:{


        addProduct:(state, action)=>{
            const isDuplicated = state.items.find((product)=>product.id == action.payload.id);
            if(!isDuplicated){
                state.items.push(action.payload)
            }
            if(isDuplicated){
                state.message = 'Producto recientemente añadido';
                console.log(state.message)

            }
        },


        removeProduct : (state, action)=>{
            console.log(state.items)
            state.items = state.items.filter(prod => prod.id !== action.payload)
        },

        resetMessage : (state)=>{
            state.message = '';
        }

    }
})


export const {
                addProduct, 
                removeProduct,
                resetMessage
            } = cart.actions

            
export default cart.reducer