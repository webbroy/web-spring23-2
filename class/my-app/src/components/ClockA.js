// import React from "react";

// // functional components are originally called "stateless components" / "dumb components" (before hooks were introduced)
// function FormattedDate(props) {
// 	console.log("functional component rendering");

// 	const { date } = props;
// 	const time = date.toLocaleTimeString();

// 	return <h2>It's {time}</h2>;
// }

// class ClockA extends React.Component {
// 	constructor(props) {
// 		super(props); // pass props into super constructor (React.Component)

// 		// maintain state of Clock component using "this.state = {}"
// 		this.state = {
// 			date: new Date(), // initialize the date state with new date object
// 			counter: 0,
// 		};
// 	}

// 	componentDidMount() {
// 		console.log("componentDidMount");
// 		// set up interval and store the timerID so we can clear it when component unmounts
// 		this.timerID = setInterval(() => {
// 			this.tick();
// 		}, 1000);
// 	}

// 	componentWillUnmount() {
// 		console.log("about to unmount");
// 		clearInterval(this.timerID); // clear the interval timer we set up in componentDidMount (a.k.a. cleanup)
// 	}

// 	/**
// 	 * Tick should create a new date object and update our component's date state
// 	 */
// 	tick() {
// 		// create new state object
// 		// update state with "this.setState()"s
// 		const newState = {
// 			// note this is a brand new object being created (diff memory address)
// 			date: new Date(),
// 		};
// 		this.setState(newState);
// 	}

// 	incrementCounter() {}

// 	// render method gets called when state changes
// 	// React reacts to states and props changes (object reference)
// 	render() {
// 		console.log("ClockA rendering");
// 		return (
// 			<div>
// 				<h1>Hello, world!</h1>
// 				<FormattedDate date={this.state.date} />
// 				<div>Counter:{this.state.counter}</div>
// 			</div>
// 		);
// 	}
// }

// export default ClockA;

import React, { useState, useEffect } from "react";

function FormattedDate({ date }) {
	console.log("functional component rendering");

	const time = date.toLocaleTimeString();

	return <h2>It's {time}</h2>;
}

function ClockA() {
	const [date, setDate] = useState(new Date());
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		console.log("componentDidMount");
		const timerID = setInterval(() => {
			tick();
		}, 1000);

		return () => {
			console.log("about to unmount");
			clearInterval(timerID);
		};
	}, []); // empty dependency array to run the effect only once on mount

	const tick = () => {
		setDate(new Date());
	};

	const incrementCounter = () => {
		setCounter((prevCounter) => prevCounter + 1);
	};

	console.log("ClockA rendering");
	console.log("clock state", { date, counter });

	return (
		<div>
			<h1>Hello, world!</h1>
			<FormattedDate date={date} />
			<div>Counter: {counter}</div>
			<button onClick={incrementCounter}>Increment Counter</button>
		</div>
	);
}

export default ClockA;
