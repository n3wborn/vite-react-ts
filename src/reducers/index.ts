// import every type of actions
import {
    CHANGE_MESSAGE_INPUT
} from "../actions";

type chatActionProps = {
    type: string,
    value: '',
}

const chatInitialState = {
    loading: false,
    username: 'John Doe',
    messages: [
        {
            id: 1,
            content: 'Hey Jane ! Are you here ?',
            user: 'John Doe',
        },
        {
            id: 2,
            content: 'Hi ! I do ',
            user: 'Jane Doe',
        },
        {
            id: 3,
            content: 'Have you plans for tonight ?',
            user: 'Jhon Doe',
        },
        {
            id: 4,
            content: 'Of course I do. I\'d like to have fun with you :) Let\'s learn React together ! ^^',
            user: 'Jane Doe',
        },
    ],
    inputMessage: '',
}



const chatReducer = (
    state = chatInitialState,
    action: chatActionProps = {
        type: '',
        value: '',
    }
) => {
    switch (action.type) {
        case CHANGE_MESSAGE_INPUT:
            return {
                ...state,
                inputMessage: action.value,
            }
        default:
            return {
                ...state,
            }
    }
}

export { chatReducer }
