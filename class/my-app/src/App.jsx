import { Component } from "react";
import "./App.css";
import ClockA from "./components/ClockA";
import Homework1 from "./components/Homework1";
import Palindrome1 from "./components/Palindrome1";
import PalindromeB from "./components/PalindromeB";
import TestEffectCounter from "./components/TestEffectCounter";
import Users from "./components/Users";
import Fetch from "./components/Fetch";
import LoginForm from "./components/LoginForm";
import React, { useState, useEffect } from "react";
import User from "./components/User";
import Input from "./Input";

// class App extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			showClockA: false,
// 		};

// 		this.handleToggleClockA = this.handleToggleClockA.bind(this);
// 	}

// 	handleToggleClockA(event) {
// 		this.setState({
// 			showClockA: !this.state.showClockA,
// 		});
// 	}

// 	render() {
// 		console.log("App rendering");
// 		console.log("state", this.state.showClockA);

// 		return (
// 			<div>
// 				{this.state.showClockA ? <ClockA /> : null}
// 				<button onClick={this.handleToggleClockA}>Toggle ClockA</button>
// 				<div>
// 					<Palindrome1 />
// 				</div>
// 			</div>
// 		);
// 	}
// }
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			greeting: "",
// 		};

// 		this.handleClick = this.handleClick.bind(this);
// 	}

// 	handleClick() {
// 		this.setState({ greeting: "Hello World!" });
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h1>{this.state.greeting ? this.state.greeting : "Click the button below"}</h1>
// 				<button onClick={this.handleClick}>Update Greeting</button>
// 			</div>
// 		);
// 	}
// }
function App() {
	// const [showClockA, setShowClockA] = useState(false);

	// const handleToggleClockA = () => {
	// 	setShowClockA((prevShowClockA) => !prevShowClockA);
	// };

	// console.log("App rendering");
	// console.log("state", showClockA);

	return (
		// <div>
		// 	<div>
		// 		{/* {showClockA ? <ClockA /> : null}
		// 		<button onClick={handleToggleClockA}>Toggle ClockA</button>
		// 		<div>
		// 			<PalindromeB />
		// 		</div>
		// 		<div>
		// 			{" "}
		// 			<TestEffectCounter />
		// 		</div> */}
		// 		<div>
		// 			<Users />
		// 		</div>
		// 	</div>
		// </div>
		<div>
			{/* <Users />
			<div>
				<Fetch />
			</div> */}
			{/* <LoginForm /> */}
			<Input label="Username" type="text" />
			<Input label="Password" type="password" />

			<User />
		</div>
	);
}

export default App;
