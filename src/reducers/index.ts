// import every type of actions
import {
    CHANGE_DIRECTION,
    RANDOMIZE_FIRST_COLOR,
    RANDOMIZE_LAST_COLOR,
} from "../actions";

// import them all with 'actions'
// import * as actions from "../actions";
// but prepend actions using actions.ACTION_TYPE
type action = {
    color: string,
    type: string,
    direction: string,
}

type state = {
    direction: string,
    firstColor: string,
    lastColor: string,
    nbColors: number,
}

const initialState: state = {
    direction: '90deg',
    firstColor: '#e367a4',
    lastColor: '#48b1f3',
    nbColors: 0,
}

// get actual state
// get action given
// => return new state
const reducer = (
    state: state = initialState,
    action: action = {
        color: '',
        type: '',
        direction: '',
    }
) => {
    switch (action.type) {
        case RANDOMIZE_FIRST_COLOR:
            return {
                ...state,
                firstColor: action.color,
                nbColors: state.nbColors + 1,
            }
        case RANDOMIZE_LAST_COLOR:
            return {
                ...state,
                lastColor: action.color,
                nbColors: state.nbColors + 1,
            }
        case CHANGE_DIRECTION:
            console.log({state, action})
            return {
                ...state,
                direction: action.direction,
            }
        default:
            return {
                ...state,
            }
    }
}

export type { action, state }

export { reducer }
