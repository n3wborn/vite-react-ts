import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from "@redux-devtools/extension";

import {chatReducer} from "../reducers";
import {loggerMiddleware} from "../middleware"

// deprecated way of doing things ?!
const enhancers = composeWithDevTools(
    applyMiddleware(...loggerMiddleware)
)

// deprecated way of doing things :/
// https://redux.js.org/introduction/why-rtk-is-redux-today
const store = createStore(
    chatReducer,
    enhancers
)

// store => keep component's state "outside" and have a global store
export default store

// https://react-redux.js.org/using-react-redux/usage-with-typescript#typing-the-connect-higher-order-component
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
