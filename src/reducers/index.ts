// import every type of actions
import {
    ACTION_PELEP
} from "../actions";

type chatActionProps = {
    type: string,
}

type chatInitialStateProps = {}

const chatInitialState: chatInitialStateProps = {}

const chatReducer = (
    state = chatInitialState,
    action: chatActionProps = {
        type: ''
    }
) => {
    switch (action.type) {
        case ACTION_PELEP:
            return {
                ...state,
            }
        default:
            return {
                ...state,
            }
    }
}

export { chatReducer }
