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
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			// creating new toto
			// taking id from nanoID & text from the action which will be sent from useDispatch
			const todo = {
				id: nanoid(),
				text: action.payload,
			};

			//after creating the todo above, changing the state i.e. adding the todo to the array
			state.todos.push(todo);
		},
		removeTodo: (state, action) => {
			//filtering out the original todos array with the todo id that is sent from action.payload
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
	},
});

//exporting individuals reducers(functionality) to directly access further in components
export const { addTodo, removeTodo } = todoSlice.actions;

//exporting all reducers of slice to give the store access of all the reducers
export default todoSlice.reducer