import {connect} from "react-redux";

import {Direction} from "../components";
import {state} from "../reducers";

const mapStateToProps = (state: state) => ({
    direction: state.direction
})

// Change state
const mapDispatchToProps = () => ({})

// container
//
// give connect the state and the dispatch, which is then executed on NbColors component
const directionContainer = connect(mapStateToProps, mapDispatchToProps)(Direction)

export default directionContainer
