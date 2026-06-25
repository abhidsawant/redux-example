import { use } from "react";
import { SET_NEW_ROLE } from "../types";

const initialState = {
    userRole: "Admin"
}

export const settingReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_NEW_ROLE:
            return {
                ...state,
                userRole: action.payload
            }

        default:
            return state;
    }
}