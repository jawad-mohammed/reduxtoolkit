import {createSlice} from '@reduxjs/toolkit'

const initialState=
    {item:0,amount:500,total:2000,isDelivered:true,cartItems:20 }

const cartslice = createSlice({
name:'items',
initialState,
reducers:{
    userAmountAdd:(state)=>{
    state.amount+=1
    },   
    userAmountDel:(state)=>{
        state.amount-=1
        },
     itemAdded:(state)=>{
      state.item+=1   
     },
     itemDeleted:(state)=>{
        state.item-=1   
       },  
     emptyCart:(state)=>{
    state.cartItems =[]
     }  
       

    }
})

export default cartslice.reducer
export const {userAmountAdd,userAmountDel,emptyCart} = cartslice.actions