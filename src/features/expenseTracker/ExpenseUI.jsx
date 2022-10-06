import {useSelector,useDispatch} from 'react-redux'
import {changeHandle,submitHandle,addValue} from './expenseSlice'

const ExpenseUI = () => {
const state = useSelector((state)=>state.expense)
console.log(state);
const dispatch = useDispatch()
const name = state.name     
console.log(name);
    return (
    <>ExpenseUI
<form  onSubmit={()=>dispatch(submitHandle())}>
<label htmlFor="name">Expenese</label>   
<input type="text" name='name' value={name} onChange={(e)=>dispatch(changeHandle(e.target.value))}/>
<button type='submit'>submit</button>
</form>    
    <hr />
    {state.val}
    <button></button>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default ExpenseUI