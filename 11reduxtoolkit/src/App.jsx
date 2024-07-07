import { useSelector } from "react-redux";
import "./App.css";
import Home from "./components/Home";

function App() {
    const c = useSelectorector(state => state.custom.c)
	return (
		<>
			<h1>Hello</h1>
			<Home />
            <h2>{c}</h2>
		</>
	);
}

export default App;
