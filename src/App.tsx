import './App.css'
// !! import components from container directory !!
import {
    NbColors,
    Controls,
    Gradient,
} from "./containers"
import Directions from "./components/Directions";

export default function App() {
    return (
        <div className="App">
            <NbColors/>
            <Controls/>
            <Gradient/>
            <Directions />
        </div>
    )
}
