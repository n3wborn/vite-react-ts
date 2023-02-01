import {connect} from "react-redux";

import {Gradient} from "../components";
import {state} from "../reducers";

// State Data => ~ useSelector
const mapStateToProps = (state: state) => ({
    firstColor: state.firstColor,
    lastColor: state.lastColor,
    direction: state.direction
})

// Change state
const mapDispatchToProps = () => ({})

// container
const gradientContainer = connect(mapStateToProps, mapDispatchToProps)(Gradient)

export default gradientContainer
