// import every type of actions
import {
    ACTION_PELEP
} from "../actions";

type chatActionProps = {
    type: string,
}

const chatInitialState = {
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
    ]
}



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
