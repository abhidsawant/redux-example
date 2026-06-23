import { DECREASE_TOTAL_LIKES, INCREASE_TOTAL_LIKES } from "../types";

const initialState = {
    totalLikes: 2
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_TOTAL_LIKES:
            return {
                ...state,
                totalLikes: state.totalLikes + action.payload
            }
        case DECREASE_TOTAL_LIKES:
            return{
                ...state,
                totalLikes: state.totalLikes - action.payload
            }
        default:
            return state;
    }
}