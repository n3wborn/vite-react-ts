import {useDispatch} from "react-redux";
import {changeDirection} from "../actions";

const Direction = () => {
    const dispatch = useDispatch()

    return (
        <>
            <div className="buttons group">
                <button
                    type="button"
                    className="button"
                    id="toLeft"
                    onClick={() => dispatch(changeDirection('270deg'))}
                >
                    to
                    Left</button>
                <button
                    type="button"
                    className="button"
                    id="to45"
                    onClick={() => dispatch(changeDirection('45deg'))}
                >
                    45
                </button>
                <button
                    type="button"
                    className="button"
                    id="to135"
                    onClick={() => dispatch(changeDirection('135deg'))}
                >
                    135
                </button>
                <button
                    type="button"
                    className="button"
                    id="to225"
                    onClick={() => dispatch(changeDirection('225deg'))}
                >
                    225
                </button>
                <button
                    type="button"
                    className="button"
                    id="to315"
                    onClick={() => dispatch(changeDirection('315deg'))}
                >
                    315
                </button>
                <button
                    type="button"
                    className="button"
                    id="toRight"
                    onClick={() => dispatch(changeDirection('90deg'))}
                >
                    to Right
                </button>
            </div>
        </>
    );
}

export default Direction
