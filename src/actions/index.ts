import {randomHexColor} from "../utils";

// Action types
export const RANDOMIZE_FIRST_COLOR = 'RANDOMIZE_FIRST_COLOR'
export const RANDOMIZE_LAST_COLOR = 'RANDOMIZE_LAST_COLOR'
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION'

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

export const changeDirection = (direction: string) => ({
    type: CHANGE_DIRECTION,
    // shorten properties of: direction: direction
    direction
})

