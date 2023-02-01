import './App.css'
import {
    NbColors,
    Controls,
    Gradient,
    Direction,
} from "./components"

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
