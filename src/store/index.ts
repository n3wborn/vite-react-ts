import {createStore} from 'redux'

import {convertReducer} from "../reducers";
import {devToolsEnhancer} from "redux-devtools-extension";

// deprecated way of doing things :/
// => https://redux.js.org/introduction/why-rtk-is-redux-today
const store = createStore(convertReducer, devToolsEnhancer())

// https://react-redux.js.org/using-react-redux/usage-with-typescript#define-root-state-and-dispatch-types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
