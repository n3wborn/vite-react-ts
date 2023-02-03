// import every type of actions
import {
    CHANGE_CURRENCY
} from "../actions";

type convertActionProps = {
    type: string,
    currency: string,
}

type convertInitialStateProps = {
    currency: string,
}

const convertInitialState: convertInitialStateProps = {
    currency: 'EUR',
}

const convertReducer = (
    state = convertInitialState,
    action: convertActionProps = {
        type: '',
        currency: '',
    }
) => {
    switch (action.type) {
        case CHANGE_CURRENCY:
            return {
                ...state,
                currency: action.currency,
            }
        default:
            return {
                ...state,
            }
    }
}

export { convertReducer }
