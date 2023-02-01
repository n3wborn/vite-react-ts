import {useSelector} from "react-redux";
import {state} from "../reducers";

const Gradient = () => {
    const firstColor = useSelector((state: state) => state.firstColor)
    const lastColor = useSelector((state: state) => state.lastColor)
    const direction = useSelector((state: state) => state.direction)

    const linearBg = `linear-gradient(${direction},${firstColor},${lastColor}`

    return (
        <>
            <div id="gradient" style={{background: linearBg}}></div>
        </>
    );
}

export default Gradient
