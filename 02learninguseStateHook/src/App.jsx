import { useState } from "react";
import "./App.css";

function App() {

    let [count, setCount] = useState(10);

    // let count = 10;

    const increaseCount = () => {
        count = count + 1;
        if(count > 20) {
            console.log("Cannot increase the count above 20");
        } else {
            setCount(count);
        }
    }

    const decreaseCount = () => {
        count = count - 1;
        if(count < 0) {
            console.log("Cannot decrease the count below 0");
        } else {
            setCount(count);
        }
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
