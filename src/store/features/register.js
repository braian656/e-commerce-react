import { createSlice } from "@reduxjs/toolkit";


const register = createSlice({
    name:'users',


    initialState : {
        users : [],
        msj: 'puta',
    },


    reducers:{

        addUser: (state, action)=>{
            state.users.push(action.payload)
        },

        findEmailDuplicated : (state, action)=>{
            const findDuplicated = state.users.find((user)=> user.email === action.payload);

        },

    },

})

export const {addUser} = register.actions
export default register.reducer