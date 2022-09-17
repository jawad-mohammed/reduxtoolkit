import React from 'react'
import {useGetAllPostQuery} from './post'

const FetchApi = () => {

    const response =  useGetAllPostQuery()
    const data = response.currentData
    console.log(data);
  return (
    <>
    <p>FetchApi</p> 
    {data.map((elem)=>{
    return(<div>
        {elem.title}{elem.body}
    </div>)
    })}
    
    
    </>
  )
}

export default FetchApi