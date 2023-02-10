import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import todoReducer from '../features/todo/todoSlice'
import {TodosApi} from '../services/todos'

export const store = configureStore({
    reducer: {
        // add our reducers from features/todo/todoSlice
        todo: todoReducer,
        // Add the generated reducer as a specific top-level slice
        [TodosApi.reducerPath]: TodosApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(TodosApi.middleware),
})

// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
// from https://redux-toolkit.js.org/tutorials/quick-start
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
