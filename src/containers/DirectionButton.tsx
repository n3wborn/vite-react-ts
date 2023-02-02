import {connect} from "react-redux";

import DirectionButton from "../components/DirectionButton";
import {changeDirection} from "../actions";

// no need to get infos from state
const mapStateToProps = null

// Change state
const mapDispatchToProps = (dispatch: Function, ownProps: { direction: string; }) => ({
    changeDirection: () => {
        dispatch(changeDirection(ownProps.direction))
    },
})

// container
const DirectionButtonContainer = connect(mapStateToProps, mapDispatchToProps)(DirectionButton)

export default DirectionButtonContainer
