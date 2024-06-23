import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
	const [count, setCount] = useState(0);

    const obj = {
        name: "Abhishek Mishra",
        age: 24
    }

    const myarr = [1, 2, 3]

	return (
		<>
			<h1 className="bg-green-400 text-black p-4 rounded-xl mb-5">Tailwind Test</h1>

            <Card username = "Abhishek" btnText = "Click Me"/>
            <Card username = "Rishabh" btnText = "Click here"/>
            <Card username = "Rishabh" />
            <Card username = "Rishabh" anotherObj = {obj}/>
            <Card username = "Rishabh" anotherArr = {myarr}/>
		</>
	);
}

export default App;
