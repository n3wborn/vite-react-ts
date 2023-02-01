import React from 'react'
import {Provider} from "react-redux";
import {render} from "react-dom";

import App from './App'
import './index.css'
import store from "./store";

const rootReactElement = (
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
)

const target = document.getElementById('root')

render(rootReactElement, target)
