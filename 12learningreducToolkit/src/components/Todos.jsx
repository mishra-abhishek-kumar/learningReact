import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
    //accessing all the todos
	const todos = useSelector((state) => state.todos);

    //using dispatch to delete specific todo
	const dispatch = useDispatch();
	return (
		<>
			<div>Todos</div>
			{todos.map((todo) => (
				<li key={todo.id}>
                    {todo.text}
                    <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                </li>
			))}
		</>
	);
}

export default Todos;
