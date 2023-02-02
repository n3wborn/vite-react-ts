import {MouseEventHandler} from "react";

type DirectionButtonType = {
    direction: string,
    changeDirection?: MouseEventHandler<HTMLButtonElement>,
}

const DirectionButton = ({direction, changeDirection}: DirectionButtonType) => (
    <button
        type="button"
        className="button"
        onClick={changeDirection}
    >
        {direction}
    </button>
)

export default DirectionButton
