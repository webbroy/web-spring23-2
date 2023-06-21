import { Component } from "react";

class Palindrome1 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleClear = this.handleClear.bind(this);
	}

	handleChange(event) {
		this.setState({
			text: event.target.value,
		});
	}

	handleClear() {
		this.setState({
			text: "",
		});
	}

	isPalindrome(string) {
		return string === string.split("").reverse().join("");
	}

	// An uncontrolled component is when an input causes a change in the React state, but state changes does not force the value property of the html node to change (1 way binding)

	// A controlled component will force the input state to synchronize with the React state

	render() {
		// console.log("text state", this.state.text);
		// console.log("test racecar", this.isPalindrome("raceca"));

		return (
			<div>
				<h1>Palindrome</h1>
				<label id="palindrome">
					Enter some text: <input id="palindrome" type="text" onChange={this.handleChange} value={this.state.text} />
				</label>
				<button type="button" onClick={this.handleClear}>
					Clear
				</button>

				<br />
				{isPalindrome ? <p>{word} is a palindrome!</p> : <p>{word} is not a palindrome.</p>}

				<h2>{this.state.text} IS/IS NOT a palindrome</h2>
			</div>
		);
	}
}

export default Palindrome1;
