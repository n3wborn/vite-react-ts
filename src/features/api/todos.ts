import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Task} from "../../components/TaskItem";

type TasksResponse = Task[]

// https://redux-toolkit.js.org/tutorials/rtk-query#create-an-api-service
export const api = createApi({
    reducerPath: 'todosApi',
    tagTypes: ['Task'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({
        getUserTodos: builder.query<TasksResponse, number>({
            query: (id: number) => ({url: `/user/${id}/todos`}),
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Task' as const, id })),
                        { type: 'Task', id: 'LIST' },
                    ]
                    : [{ type: 'Task', id: 'LIST' }],
        }),
    }),
})

// Export hooks for usage in functional components
export const {useGetUserTodosQuery} = api
