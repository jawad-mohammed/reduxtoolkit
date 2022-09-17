import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import userslice from './userSlice'
import {addPerson,deletePerson,updatePerson} from './userSlice'
const UsersList = () => {
  const allusers = useSelector((state)=>state.users.val)
  const dispatch = useDispatch()

  const [userdata,setUserdata] = useState({
    id1:'',
    title1:'',
    body1:''
  })  
  const {id1,title1,body1} = userdata
  const handleChange=(e)=>{
setUserdata({...userdata,[e.target.name]:e.target.value})
  }
  return (
    <>
    <p>UsersList</p>
    <button>Get </button> 
    {allusers.map((user)=>{
        return(<div>
              {user.id}
            <h5>{user.title}</h5>
           <p>{user.body}</p> 
           <p>New User</p>
           id:{user.id1}title{user.title1}{user.body1}
           <button onClick={()=>{dispatch(deletePerson({id:user.id}))}}>Delete</button>  
           <button onClick={()=>dispatch({id:user.id,body:body1})}>Update</button>
        </div>)
    })}
   
<p>Update user</p>


<h3>Form</h3>
<input type="text" name='id1' value={id1} onChange={handleChange}placeholder='Id'/><br />
<input type="text" name='title1' value={title1} onChange={handleChange} placeholder='Title'/><br />
<input type="text" name='body1' value={body1} onChange={handleChange} placeholder='Body'/><br />
<button onClick={()=>dispatch(addPerson({
    id:allusers[allusers.length-1].id+1,
    id1,
    title1,body1
}))}>Add</button>
    


    </>
  )
}

export default UsersList