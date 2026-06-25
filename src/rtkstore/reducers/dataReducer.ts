import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalLikes: 0,
    userName: "Abhishek"
}

export const dataSlice = createSlice({
    name: "dataReducer",

    initialState: initialState,

    reducers: {
        increment: (state) => {
            state.totalLikes += 1
        },

        decrement: (state) => {
            state.totalLikes -= 1
        },

        incrementByAmount: (state, action) => {
            state.totalLikes += action.payload
        }
    }
})

export const { increment, decrement } = dataSlice.actions;

export default dataSlice.reducer;