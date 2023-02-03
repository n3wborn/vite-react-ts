import {createStore} from 'redux'

import {convertReducer} from "../reducers";
import {devToolsEnhancer} from "redux-devtools-extension";

// deprecated way of doing things :/
// https://redux.js.org/introduction/why-rtk-is-redux-today
const store = createStore(convertReducer, devToolsEnhancer())

export default store
