import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {api} from './features/api/todos'

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

// enable refetchOnMount and refetchOnReconnect behaviors.
setupListeners(store.dispatch)
// from https://redux-toolkit.js.org/tutorials/quick-start
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
