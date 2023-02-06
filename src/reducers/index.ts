// import every type of actions
import {
    CHANGE_CURRENCY,
    CHANGE_AMOUNT,
    WAKE_UP,
} from "../actions";

type convertState = {
    amount: number,
    currency: string,
    loading: boolean,
}

type convertAction = {
    amount: number,
    currency: string,
    type: string,
}

const convertInitialState: convertState = {
    amount: 1,
    currency: 'EUR',
    loading: false,
}

const convertReducer = (
    state: convertState = convertInitialState,
    action: convertAction = {
        amount: 0,
        currency: '',
        type: '',
    }
) => {
    switch (action.type) {
        case CHANGE_AMOUNT:
            return {
                ...state,
                amount: action.amount
            }
        case CHANGE_CURRENCY:
            return {
                ...state,
                currency: action.currency,
            }
        case WAKE_UP:
            return {
                ...state,
                loading: true
            }
        default:
            return {
                ...state,
            }
    }
}

export type {convertAction, convertState}
export {convertReducer}
