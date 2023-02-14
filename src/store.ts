import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {TodosApi} from './features/api/todos'

export const store = configureStore({
    reducer: {
        [TodosApi.reducerPath]: TodosApi.reducer,
    },
})

// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
// from https://redux-toolkit.js.org/tutorials/quick-start
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
