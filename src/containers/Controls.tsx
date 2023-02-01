import {connect, ConnectedProps} from "react-redux";

import {Controls} from "../components";
import {randomizeFirstColor, randomizeLastColor} from "../actions";

// State Data => ~ useSelector
// when this is not used -> set it to null
const mapStateToProps = null

// Change state
// prepares props, using functions
// @ts-ignore
const mapDispatchToProps = (dispatch) => ({
    randomFirstColor: () => {
        dispatch(randomizeFirstColor())
    },
    randomLastColor: () => {
        dispatch(randomizeLastColor())
    },
})

// container
// connect(what do we need ?)(who need it ?)
const controlsContainer = connect(mapStateToProps, mapDispatchToProps)(Controls)

export default controlsContainer
