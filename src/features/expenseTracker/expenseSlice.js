import {createSlice} from '@reduxjs/toolkit'

const initialState= {name:'jawad',val:0}

const expenseslice = createSlice({
name:'expense',
initialState,
reducers:{
changeHandle:(state,action)=>{
state.name = action.payload 
},
submitHandle:(state)=>{
state.name = state.name
},
addValue:(state,action)=>{
state.val +=action.payload
},
delVal:()=>{

}
}
})
export default expenseslice.reducer
export const {changeHandle,submitHandle,addValue } = expenseslice.actions