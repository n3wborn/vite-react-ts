import React from 'react'
import {createRoot} from 'react-dom/client';
import {Provider} from "react-redux";

import App from './App'
import './index.css'
import store from "./store";

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
const container = document.getElementById('root')!;
const root = createRoot(container);

const rootReactElement = (
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
)

root.render(rootReactElement);
