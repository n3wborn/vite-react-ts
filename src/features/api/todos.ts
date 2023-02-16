import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Task} from "../../components/TaskItem"

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
                        ...result.map(({id}) => ({type: 'Task' as const, id})),
                        {type: 'Task', id: 'LIST'},
                    ]
                    : [{type: 'Task', id: 'LIST'}],
        }),
        toggleCompleted: builder.mutation({
            /// user 5's task title "suscipit qui totam" =>  todos?userId=5&title=suscipit%20qui%20totam
            // list completed todos from userId 5 => '/todos?userId=5&completed=true'
            // patch "completed" todos with id=1 => PATCH '/todos/${id}'
            query: ({id, completed}) => ({
                url: `/todos/${id}`,
                method: 'PATCH',
                completed: completed,
            }),
            transformResponse: (response: { data: Task }, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            invalidatesTags: ['Task'],
        }),
        updateTodo: builder.mutation({
            // examples of api url/query:
            // - user 5's task title "suscipit qui totam" =>  todos?userId=5&title=suscipit%20qui%20totam
            // - completed todos from userId 5 => '/todos?userId=5&completed=true'
            query: ({id, ...patch}) => ({
                url: `/todos/${id}`,
                method: 'PUT',
                body: patch,
            }),
            invalidatesTags: (result, error, id) => [{type: 'Task', id}],
        }),
        deleteTodo: builder.mutation<{ success: boolean; id: number }, number>({
            query(id) {
                return {
                    url: `/todos/${id}`,
                    method: 'DELETE',
                }
            },
            // Invalidates all queries that subscribe to this Post `id` only.
            invalidatesTags: (result, error, id) => [{type: 'Task', id}],
        }),
        addPost: builder.mutation({
            query: (body) => ({
                url: `/posts`,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'Task', id: 'LIST'}],
        }),
    }),
})

// Export hooks for usage in functional components
export const {
    useGetUserTodosQuery,
    useToggleCompletedMutation,
    useDeleteTodoMutation,
    useAddPostMutation,
    useUpdateTodoMutation,
} = api
