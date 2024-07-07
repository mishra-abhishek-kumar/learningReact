import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Home() {
	const dispatch = useDispatch();

    //another way of directly accwssing
    // const {c} = useSelector(state => state.custom)
    const c = useSelector(state => state.custom.c)

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
			<h2>{c}</h2>

			<button onClick={addBtn}>Increment</button>
			<button onClick={incrementByVal}>IncrementByValue</button>
			<button onClick={subBtn}>Decrement</button>
		</>
	);
}

export default Home;
