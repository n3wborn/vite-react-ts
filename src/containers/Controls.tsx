import {connect} from "react-redux";

import {Controls} from "../components";
import {randomizeFirstColor, randomizeLastColor} from "../actions";

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
    randomAllColor: () => {
        dispatch(randomizeFirstColor())
        dispatch(randomizeLastColor())
    },
})

// container
// connect(what do we need ?)(who need it ?)
const controlsContainer = connect(null, mapDispatchToProps)(Controls)

export default controlsContainer
