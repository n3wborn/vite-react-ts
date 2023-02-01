import {useDispatch} from "react-redux";
import {randomizeFirstColor, randomizeLastColor} from "../actions";

const Controls = () => {
    const dispatch = useDispatch()

    return (
        <>
            <div className="buttons group">
                <button
                    type="button"
                    className="button"
                    id="randFirst"
                    onClick={() => dispatch(randomizeFirstColor())}
                >
                    Random First
                </button>
                <button
                    type="button"
                    className="button"
                    id="randLast"
                    onClick={() => dispatch(randomizeLastColor())}
                >
                    Random Last
                </button>
            </div>
        </>
    )
}

export default Controls
