import {createStore} from 'redux'

import { reducer } from "../reducers";

// deprecated way of doing things :/
// https://redux.js.org/introduction/why-rtk-is-redux-today
const store = createStore(reducer)

export default store
