import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    return (
        <div className="App">
            <div id="nbColors"></div>

            <div className="buttons group">
                <button className="button" id="randFirst">Random First</button>
                <button className="button" id="randAll">Random All</button>
                <button className="button" id="randLast">Random Last</button>
            </div>

            <div id="colors"></div>

            <div id="gradient"></div>

            <div className="buttons group">
                <button className="button" id="toLeft">to Left</button>
                <button className="button" id="toRight">to Right</button>
            </div>
        </div>
    )
}

export default App
