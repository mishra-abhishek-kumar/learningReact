import { createSlice, nanoid } from "@reduxjs/toolkit";

//creating initial state
const initialState = {
	todos: [{ id: 1, text: "Hello World!" }],
};

//creating customSlice
//name can be anything
//1st we provide a slice name
//2nd we provide the initial state
//3rd we create our reducers
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {}
});
