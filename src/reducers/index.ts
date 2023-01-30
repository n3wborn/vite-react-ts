type initialStateProps = {
    direction: string,
    firstColor: string,
    lastColor: string,
    nbColors: number,
}

const initialState: initialStateProps = {
    direction: '90deg',
    firstColor: '#e367a4',
    lastColor: '#48b1f3',
    nbColors: 0,
}

// get actual state
// get action given
// => return new state
const reducer = (
    state = initialState,
    action = {
        color: '',
        type: ''
    }
) => {
    switch (action.type) {
        case 'RANDOMIZE_FIRST_COLOR':
            return {
                ...state,
                firstColor: action.color,
                nbColors: state.nbColors + 1,
            }
            case 'RANDOMIZE_LAST_COLOR':
            return {
                ...state,
                lastColor: action.color,
                nbColors: state.nbColors + 1,
            }
        case 'CHANGE_DIRECTION_TO_LEFT':
            return {
                // return the same object, but with direction '270deg'
                ...state,
                direction: '270deg',
            }
        case 'CHANGE_DIRECTION_TO_RIGHT':
            return {
                ...state,
                direction: '90deg',
            }
        default:
            return {
                ...state,
            }
    }
}

export { reducer }
