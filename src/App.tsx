import './App.css'
import store from "./store";
import {generateSpanColor, randomHexColor} from "./utils";

// store
//  - Read      => getState() : get actual state
//  - Write     => dispatch() : change state
//  - Subscribe => subscribe() : subscribe to state update/modifications


const renderNbColors = () => {
    const state = store.getState()
    const {nbColors} = state
    document.getElementById('nbColors').innerHTML = `${nbColors} colors generated`
}

const renderGradient = () => {
    const state = store.getState()
    const {direction, firstColor, lastColor} = state

    document.getElementById('gradient').style.background = `linear-gradient(${direction},${firstColor},${lastColor})`
}

const renderColors = () => {
    const state = store.getState()
    const {direction, firstColor, lastColor} = state

    const firstSpan = generateSpanColor(firstColor)
    const lastSpan = generateSpanColor(lastColor)

    document.getElementById('colors').innerHTML = direction === '90deg'
        ? `${firstSpan} -> ${lastSpan}`
        : `${lastSpan} -> ${firstSpan}`
}

renderNbColors()
renderGradient()
renderColors()

// subscribe to state updates
store.subscribe(() => {
    console.log('state just changed')
})

store.subscribe(renderNbColors)
store.subscribe(renderGradient)
store.subscribe(renderColors)

// controls
const randAllElement = document.getElementById('randAll')
randAllElement.addEventListener('click', () => {
        store.dispatch({type: 'RANDOMIZE_FIRST_COLOR', color: randomHexColor()})
        store.dispatch({type: 'RANDOMIZE_LAST_COLOR', color: randomHexColor()})
    }
)

const randFirstElement = document.getElementById('randFirst')
randFirstElement.addEventListener('click', () => {
        store.dispatch({type: 'RANDOMIZE_FIRST_COLOR', color: randomHexColor()})
    }
)

const randLastElement = document.getElementById('randLast')
randLastElement.addEventListener('click', () => {
        store.dispatch({type: 'RANDOMIZE_LAST_COLOR', color: randomHexColor()})
    }
)

const toLeftElement = document.getElementById('toLeft')
toLeftElement.addEventListener('click', () => {
        store.dispatch({type: 'CHANGE_DIRECTION_TO_LEFT'})
    }
)

const toRightElement = document.getElementById('toRight')
toRightElement.addEventListener('click', () => {
        store.dispatch({type: 'CHANGE_DIRECTION_TO_RIGHT'})
    }
)

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
