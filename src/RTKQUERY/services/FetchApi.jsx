import {useGetAllApiQuery,useGetApiByIdQuery } from './postApi'

const FetchApi = () => {
// const data =  useGetAllApiQuery()  
// console.log(data);
// const {data, isLoading} =  useGetAllApiQuery()  
// console.log(data);
//   if(isLoading)  return <h1>Please wait...</h1>

//fetch by Id
const fetchWithId = useGetApiByIdQuery(1)
console.log(fetchWithId);
    return (
    <div>FetchApi
        
{/* {data.map(({title,body})=>{
return(<div>
    {title}{body}
</div>)
})} */}

{fetchWithId.data.title}
{fetchWithId.data.body}
    </div>
  )
}

export default FetchApi 