import { Component } from "react";

class Palindrome1 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: "",
			textB: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleClear = this.handleClear.bind(this);
		this.handleChange2 = this.handleChange.bind(this);
		this.handleClear2 = this.handleClear.bind(this);
	}

	handleChange(event) {
		this.setState({
			text: event.target.value,
		});
	}
	handleChange2(event) {
		this.setState({
			textB: event.target.value,
		});
	}

	handleClear() {
		this.setState({
			text: "",
		});
	}
	handleClear2() {
		this.setState({
			textB: "",
		});
	}

	isPalindrome(string) {
		return string === string.split("").reverse().join("");
	}

	// An uncontrolled component is when an input causes a change in the React state, but state changes does not force the value property of the html node to change (1 way binding)

	// A controlled component will force the input state to synchronize with the React state

	render() {
		const isPalindrome = this.isPalindrome(this.state.text);
		const message = isPalindrome ? `${this.state.text} IS a palindrome` : `${this.state.text} IS NOT a palindrome`;

		return (
			<div>
				<h1>Palindrome</h1>
				<label htmlFor="text">
					Enter some text:{""} <input id="palindrome" type="text" onChange={this.handleChange} value={this.state.text} />
				</label>
				<br />
				<label id="textB">
					Enter some additional text:{""} <input id="textB" type="text" onChange={this.handleChange} value={this.state.textB} />
				</label>
				<br />
				<button type="button" onClick={this.handleClear}>
					Clear
				</button>

				{/* TODO: Create a second input field here as a controlled component to update the "textB" state */}

				<br />

				<h2>{message}</h2>
			</div>
		);
	}
}

export default Palindrome1;
