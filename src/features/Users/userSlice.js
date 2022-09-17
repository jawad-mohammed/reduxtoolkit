import {createSlice} from '@reduxjs/toolkit'
import {data} from './data'
const userslice = createSlice({
    name:'users',
    initialState:{val:data},
    reducers:{
        addPerson:(state,action)=>{
        state.val.push(action.payload)
        },
        deletePerson:(state,action)=>{
        state.val=state.val.filter((elem)=>elem.id !== action.payload.id)
        },
        updatePerson:(state,action)=>{
        state.val.map((elem)=>{
            if(elem.id === action.payload.id){
           elem.body = action.payload.body        
            }
        })
        },


    }
})
export default userslice.reducer
export const {addPerson,deletePerson,updatePerson} = userslice.actions