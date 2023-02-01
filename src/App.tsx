import './App.css'
// !! import components from container directory !!
import {
    NbColors,
    Controls,
    Gradient,
    Direction
} from "./containers"

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
