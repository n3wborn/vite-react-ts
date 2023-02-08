import {createStore} from 'redux'

import {chatReducer} from "../reducers";
import {devToolsEnhancer} from "@redux-devtools/extension";

// deprecated way of doing things :/
// https://redux.js.org/introduction/why-rtk-is-redux-today
// @ts-ignore
const store = createStore(chatReducer, devToolsEnhancer())

// store => keep component's state "outside" and have a global store
export default store

// https://react-redux.js.org/using-react-redux/usage-with-typescript#typing-the-connect-higher-order-component
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
