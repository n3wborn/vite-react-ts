import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Task} from "../../components/TaskItem";

// https://redux-toolkit.js.org/tutorials/rtk-query#create-an-api-service
export const api = createApi({
    reducerPath: 'todosApi',
    tagTypes: ['Task'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({
        getUserTodos: builder.query({
            query: (id: number) => ({url: `/user/${id}/todos`}),
        }),
    }),
})

// Export hooks for usage in functional components
export const {useGetUserTodosQuery} = api
