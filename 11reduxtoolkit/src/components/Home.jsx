import React from "react";

function Home() {
	const value = 20;
	return (
		<>
			<h2>{value}</h2>

			<button>Increment</button>
			<button>Decrement</button>
		</>
	);
}

export default Home;
