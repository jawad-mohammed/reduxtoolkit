import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
reducerPath:'postApi',
baseQuery:fetchBaseQuery({
    baseUrl:`https://jsonplaceholder.typicode.com/`
}),
endpoints:(builder)=>({

getAllApi: builder.query({
query:()=>({
url:'posts',
method:'GET'
})
}),

getApiById:builder.query({
    query:(id)=>({
        url:`posts/${id}`,
        method:'GET'
    })
})



})
})

export const { useGetAllApiQuery, useGetApiByIdQuery } = postApi