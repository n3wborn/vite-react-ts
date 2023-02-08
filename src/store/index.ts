import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {},
})

// from https://redux-toolkit.js.org/tutorials/quick-start
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
