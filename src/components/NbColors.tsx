import {useSelector} from "react-redux";
import {state} from "../reducers";

// from State:
//  get data        => useSelector
//  write/set data  => useDispatch
const NbColors = () => {
    // get data from state
    // pass a function to select/chose data we want from the store
    const nbColors = useSelector((state: state) => state.nbColors)

    return (
        <div id="nbColors">
            {nbColors} colors generated
        </div>
    );
}

export default NbColors
