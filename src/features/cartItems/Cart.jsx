import {useSelector,useDispatch} from 'react-redux'
import {userAmountAdd,userAmountDel,emptyCart} from './cartSlice'
const Cart = () => {
  const state = useSelector((state)=>state.items)
  const dispatch = useDispatch()
  console.log(state);  
  return (
    <div>
 {state.item} <hr />
{state.amount} <hr />
Total cart items  {state.cartItems >0 ?state.cartItems :0} 
<button onClick={()=>dispatch(emptyCart())}>Delete all</button>
<hr />

<button onClick={()=>dispatch(userAmountAdd())}>+</button>
<button onClick={()=>dispatch(userAmountDel())}>-</button>

    </div>
  )
}

export default Cart