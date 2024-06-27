import { useCallback, useEffect, useRef, useState } from "react";

function App() {
	const [length, setLength] = useState(8);
	const [numAllowed, setNumAllowed] = useState(false);
	const [charAllowed, setCharAllowed] = useState(false);
	const [password, setPassword] = useState("");

	//useRef
	const passwordRef = useRef();

	//useCallback
	const generatePassword = useCallback(() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		if (numAllowed) str += "0123456789";
		if (charAllowed) str += '<>()@#$%^&!,.":;~`';

		for (let i = 0; i < length; i++) {
			let char = Math.floor(Math.random() * str.length + 1);
			pass += str.charAt(char);
		}

		setPassword(pass);
	}, [length, numAllowed, charAllowed]);

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();

        window.navigator.clipboard.writeText(password);
    }, [password])

	//useEffect
	useEffect(() => {
		generatePassword();
	}, [length, numAllowed, charAllowed, generatePassword]);

	return (
		<>
			<div className="w-full max-w-md mx-auto text-center shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
				<h1 className="text-white text-center my-3">Password genertor</h1>
				<div className="flex shadow rounded-lg overflow-hidden mb-4">
					<input
						type="text"
						value={password}
						className="outline-none w-full py-1 px-3 text-black"
						placeholder="password"
						readOnly
						ref={passwordRef}
					/>
					<button
						onClick={copyPasswordToClipboard}
						className="outline-none bg-blue-500 hover:bg-blue-700 active:bg-blue-500 text-white px-3 py-0.5 shrink-0"
					>
						copy
					</button>
				</div>
				<div className="flex text-sm gap-x-2">
					<div className="flex items-center gap-x-1">
						<input
							type="range"
							min={6}
							max={100}
							value={length}
							className="cursor-pointer"
							onChange={(e) => {
								setLength(e.target.value);
							}}
						/>
						<label>Length: {length}</label>
					</div>
					<div className="flex items-center gap-x-1">
						<input
							type="checkbox"
							defaultChecked={numAllowed}
							id="numberInout"
							onChange={(e) => {
								setNumAllowed((prev) => !prev);
							}}
						/>
						<label>Numbers</label>
					</div>
					<div className="flex items-center gap-x-1">
						<input
							type="checkbox"
							defaultChecked={charAllowed}
							id="charInput"
							onChange={(e) => {
								setCharAllowed((prev) => !prev);
							}}
						/>
						<label>Characters</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
