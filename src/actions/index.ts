// Action types
export const CHANGE_MESSAGE_INPUT = 'CHANGE_MESSAGE_INPUT'
// Action creators
export const changeMessageInput = (message: string) => ({
    type: CHANGE_MESSAGE_INPUT,
    message
})

