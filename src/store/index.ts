import {configureStore} from '@reduxjs/toolkit'
// this import represent our reducers from todoSlice
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: {
        // add our reducers from features/todo/todoSlice
        todo: todoReducer,
    },
})

// from https://redux-toolkit.js.org/tutorials/quick-start
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
