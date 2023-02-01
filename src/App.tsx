import './App.css'
import store from "./store";
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

store.subscribe(renderNbColors)

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
