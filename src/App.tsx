import './App.css'
import {Converter} from "./components";

export default function App() {
    return (
        <div className="App">
            <Converter loading={false}/>
        </div>
    )
}
