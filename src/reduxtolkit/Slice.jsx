import React from 'react'
import { createSlice } from "@reduxjs/toolkit"


const initialState={
    value:""
}

const calculatorslice=createSlice({
    name:"calculator",
    initialState,
  reducers  :{
     appendval:(state,action)=> {
        state.value+=action.payload
     },

     calculateval:(state)=> {
        state.value=String(eval(state.value))
     },

     clearval:(state)=> {
        state.value=""
     }
        

    }
})

 export const {appendval,calculateval,clearval}=calculatorslice.actions

export default calculatorslice.reducer