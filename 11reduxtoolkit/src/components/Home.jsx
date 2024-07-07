import React from "react";
import { useDispatch } from "react-redux";

function Home() {
	const value = 20;
	const dispatch = useDispatch();

	const addBtn = () => {
		dispatch({
			type: "Increment",
		});
	};

	const incrementByVal = () => {
		dispatch({
			type: "IncrementByValue",
			payload: 25,
		});
	};

	const subBtn = () => {
		dispatch({
			type: "Decrement",
		});
	};
	return (
		<>
			<h2>{value}</h2>

			<button onClick={addBtn}>Increment</button>
			<button onClick={incrementByVal}>IncrementByValue</button>
			<button onClick={subBtn}>Decrement</button>
		</>
	);
}

export default Home;
