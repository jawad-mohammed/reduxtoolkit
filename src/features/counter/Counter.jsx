import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {add,del,reset,addUserVal} from './counterSlice'
const Counter = () => {
const count =   useSelector((state)=>state.count.val)
const dispatch = useDispatch()
    return (
    <>  
    <h3> Counter {count}</h3>
    <button onClick={()=>dispatch(add())}>Add One</button>
    <button onClick={()=>dispatch(del())}>Sub One</button>
    <button onClick={()=>dispatch(reset())}>Reset </button>
    </>
  )
}

export default Counter