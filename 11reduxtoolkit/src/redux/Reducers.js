import { createReducer } from "@reduxjs/toolkit";

//creating initial state for the reducer
const initialState = {
	c: 0,
};

//creating customReducer
//name can be anything
//1st parameter is the initial state
//2nd parameter can have multiple reducer, we create reducers here
export const customReducer = createReducer(initialState, {
	Increment: (state) => {
		state.c += 1;
	},
	IncrementByValue: (state, action) => {
		state.c += 1;
		state.c += action.payload;
	},
	Decrement: (state) => {
		state.c -= 1;
	},
});
