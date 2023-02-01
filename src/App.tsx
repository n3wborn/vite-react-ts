import './App.css'
import store from "./store";
import {generateSpanColor} from "./utils";
import {randomizeFirstColor, randomizeLastColor} from "./actions";
import {
    NbColors,
    Controls,
    Gradient,
    Direction,
} from "./components"

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

export default function App() {
    return (
        <div className="App">
            <NbColors/>
            <Controls/>
            <Gradient/>
            <Direction/>
        </div>
    )
}
