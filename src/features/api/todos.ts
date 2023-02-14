import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// https://redux-toolkit.js.org/tutorials/rtk-query#create-an-api-service
export const TodosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (builder) => ({
        getTodoById: builder.query({
            query: (id: number) => `todos/${id}`,
        }),
        getUserTodosByUserId: builder.query({
            query: (id: number) => `user/${id}/todos`,
        }),
    }),
})

// Export hooks for usage in functional components
// export const { useGetPokemonByNameQuery } = TodosApi
export const {
    useGetTodoByIdQuery,
    useGetUserTodosByUserIdQuery
} = TodosApi
