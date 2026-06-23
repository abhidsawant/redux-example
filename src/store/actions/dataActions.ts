import { DECREASE_TOTAL_LIKES, INCREASE_TOTAL_LIKES } from "../types"

export const increaseTotalLikes = (payload) => ({
    type: INCREASE_TOTAL_LIKES,
    payload: payload
})

export const decreaseTotalLikes = (payload) => ({
    type: DECREASE_TOTAL_LIKES,
    payload: payload
})