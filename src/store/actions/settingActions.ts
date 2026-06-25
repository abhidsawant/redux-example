import { SET_NEW_ROLE } from "../types";

export const updateRole = (payload) => ({
    type: SET_NEW_ROLE,
    payload: payload
})