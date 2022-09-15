import {createSlice} from '@reduxjs/toolkit'

const counterslice = createSlice({
    name:'count',
    initialState:{val:5},
    reducers:{
        add:(state)=>{
        state.val +=1  
        },
        del:(state)=>{
        state.val -=1 
        },
        reset:(state)=>{
       state.val = 0
        },
        addUserVal:()=>{

        }
    }
})

export default counterslice.reducer
export const {add,del,reset,addUserVal} = counterslice.actions