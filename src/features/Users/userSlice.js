import {createSlice} from '@reduxjs/toolkit'
import {data} from './data'
const userslice = createSlice({
    name:'users',
    initialState:{val:data},
    reducers:{
        addPerson:(state,action)=>{
        state.val.push(action.payload)
        },
        deletePerson:()=>{

        },
        updatePerson:()=>{

        },


    }
})
export default userslice.reducer
export const {addPerson,deletePerson,updatePerson} = userslice.actions