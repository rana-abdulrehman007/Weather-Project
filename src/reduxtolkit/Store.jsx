import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import calculatorReducer  from  "./Slice"

const Store= configureStore({
    reducer:{

        calculator:calculatorReducer
        
    }
})

export default Store;