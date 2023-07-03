import React, { useCallback, useEffect, useState } from "react";

/**
 * This component is used to test useEffect and how it responds to state/prop changes.
 * Complete all the TODO points below and test out the component yourself.
 * See if you can understand and make sense of the useEffect behavior.
 * Read the React documentation for more information.
 * Test the component's useEffect with no dependency array, with empty dep. array, and with a dependency array with dependent variables inside it.
 */ // @returns {JSX.Element}
///
const TestEffectCounter = () => {
	const [counter, setCounter] = useState(0);

	const unmemoized = () => {
		console.log("UNMEMOIZED FUNCTION");
	};

	const memoized = useCallback(() => {
		console.log("I am memoized.");
	}, []);

	useEffect(() => {
		console.log("== component mounted, useEffect runs ==");

		unmemoized();

		return () => {
			console.log("== component unmounted, useEffect cleanup runs ==");
		};
	}, [unmemoized]);

	const incrementCounter = () => {
		setCounter(counter + 1);
	};

	return (
		<div>
			<h1>TestEffectCounter</h1>

			<h2>Counter: {counter}</h2>

			<button onClick={incrementCounter}>Increment</button>
		</div>
	);
};

export default TestEffectCounter;
