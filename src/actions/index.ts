import {randomHexColor} from "../utils";

// Action types
export const RANDOMIZE_FIRST_COLOR = 'RANDOMIZE_FIRST_COLOR'
export const RANDOMIZE_LAST_COLOR = 'RANDOMIZE_LAST_COLOR'
export const CHANGE_DIRECTION_TO_LEFT = 'CHANGE_DIRECTION_TO_LEFT'
export const CHANGE_DIRECTION_TO_RIGHT = 'CHANGE_DIRECTION_TO_RIGHT'

// Action creators
// {type: RANDOMIZE_FIRST_COLOR, payload: 'infos to transmit'}
export const randomizeFirstColor = () => ({
    type: RANDOMIZE_FIRST_COLOR,
    color: randomHexColor()
})

export const randomizeLastColor = () => ({
    type: RANDOMIZE_LAST_COLOR,
    color: randomHexColor()
})

export const directionToLeft = () => ({
    type: CHANGE_DIRECTION_TO_LEFT,
})

export const directionToRight = () => ({
    type: CHANGE_DIRECTION_TO_RIGHT,
})
