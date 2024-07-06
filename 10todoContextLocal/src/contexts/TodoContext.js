import { createContext, useContext } from "react";


// In context we only provide states and method description and not method functionality
// Method functionality are written in APP.js
export const TodoContext = createContext({
	todos: [
		{
			id: 1,
			todo: "Todo msg",
			completed: false,
		},
	],
	addTodo: (todo) => {},
	updateTodo: (id, todo) => {},
	deleteTodo: (id) => {},
	toggleTodo: (id) => {},
});

export const useTodo = () => {
	return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
