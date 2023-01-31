import './App.css'
import store from "./store";
import {generateSpanColor} from "./utils";
import {
    directionToLeft,
    directionToRight,
    randomizeFirstColor,
    randomizeLastColor
} from "./actions";


// store
//  - Read      => getState() : get actual state
//  - Write     => dispatch() : change state
//  - Subscribe => subscribe() : subscribe to state update/modifications

const renderNbColors = () => {
    const state = store.getState()
    const {nbColors} = state
    const nbColorsEl = document.getElementById('nbColors')

    nbColorsEl
        ? nbColorsEl.innerHTML = `${nbColors} colors generated`
        : null
}

const renderGradient = () => {
    const state = store.getState()
    const {direction, firstColor, lastColor} = state
    const gradientEl = document.getElementById('gradient')

    gradientEl
        ? gradientEl.style.background = `linear-gradient(${direction},${firstColor},${lastColor})`
        : null
}

const renderColors = () => {
    const state = store.getState()
    const {direction, firstColor, lastColor} = state

    const firstSpan = generateSpanColor(firstColor)
    const lastSpan = generateSpanColor(lastColor)
    const colorsEl = document.getElementById('colors')

    // avoid double optional chaining
    if (colorsEl) {
        // change arrow direction base on direction
        colorsEl.innerHTML = direction === '90deg'
            ? `${firstSpan} -> ${lastSpan}`
            : `${lastSpan} -> ${firstSpan}`
    }
}

// init
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
document.getElementById('randAll')
    ?.addEventListener('click', () => {
            store.dispatch(randomizeFirstColor())
            store.dispatch(randomizeLastColor())
        }
    )

document.getElementById('randFirst')
    ?.addEventListener('click', () => {
            store.dispatch(randomizeFirstColor())
        }
    )

document.getElementById('randLast')
    ?.addEventListener('click', () => {
            store.dispatch(randomizeLastColor())
        }
    )

document.getElementById('toLeft')
    ?.addEventListener('click', () => {
            store.dispatch(directionToLeft())
        }
    )

document.getElementById('toRight')
    ?.addEventListener('click', () => {
            store.dispatch(directionToRight())
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
                <button className="button" id="to45">45</button>
                <button className="button" id="to135">135</button>
                <button className="button" id="to225">225</button>
                <button className="button" id="to315">315</button>
                <button className="button" id="toRight">to Right</button>
            </div>
        </div>
    )
}

export default App
