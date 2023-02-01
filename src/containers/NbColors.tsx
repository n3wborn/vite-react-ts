import {connect} from "react-redux";

import {NbColors} from "../components";
import {state} from "../reducers";

// State Data => ~ useSelector
// prepare props for NbColors component
const mapStateToProps = (state: state) => ({
    nbColors: state.nbColors
})

// Change state
const mapDispatchToProps = () => ({})

// container
//
// give connect the state and the dispatch, which is then executed on NbColors component
const nbColorsContainer = connect(mapStateToProps, mapDispatchToProps)(NbColors)

export default nbColorsContainer
