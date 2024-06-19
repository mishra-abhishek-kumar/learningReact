import { useState } from "react";
import "./App.css";

function App() {

    let [count, setCount] = useState(10);

    // let count = 10;

    const increaseCount = () => {
        count = count + 1;
        setCount(count);
        console.log("Count increased ", count);
    }

    const decreaseCount = () => {
        count = count - 1;
        setCount(count);
        console.log("Count decreased ", count);
    }

	return (
		<>
			<h2>Count is: {count}</h2>
            <br />
            <button onClick={increaseCount}>Increase count</button>
            <button onClick={decreaseCount}>Decrease count</button>
		</>
	);
}

export default App;
