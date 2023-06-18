import { Component } from "react";
import "./App.css";
import ClockA from "./components/ClockA";
import Homework1 from "./components/Homework1";
import PalindromeChecker from "./components/palindrome";

class App extends Component {
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
	// 					<h1>{this.state.greeting ? this.state.greeting : "Click the button below"}</h1>
	// 					<button onClick={this.handleClick}>Update Greeting</button>
	// 				</div>
	// 			</div>
	// 		);
	// 	}
	// }
	constructor(props) {
		super(props);

		this.state = {
			greeting: "",
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({ greeting: "Hello World!" });
	}

	render() {
		return (
			<div>
				<h1>{this.state.greeting ? this.state.greeting : "Click the button below"}</h1>
				<button onClick={this.handleClick}>Update Greeting</button>
			</div>
		);
	}
}

export default App;
