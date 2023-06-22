import React from "react";

class PalindromeChecker extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			word: "",
			isPalindrome: false,
		};

		this.handleChange = this.handleChange.bind(this);
		this.checkPalindrome = this.checkPalindrome.bind(this);
	}

	handleChange(event) {
		this.setState({ word: event.target.value });
	}

	checkPalindrome() {
		const { word } = this.state;
		const cleanedWord = word.toLowerCase().replace(/\s/g, ""); // Remove spaces and convert to lowercase
		const reversedWord = cleanedWord.split("").reverse().join(""); // Reverse the word

		const isPalindrome = cleanedWord === reversedWord;
		this.setState({ isPalindrome });
	}

	render() {
		const { word, isPalindrome } = this.state;

		return (
			<div>
				<h2>Palindrome Checker</h2>
				<input type="text" value={word} onChange={this.handleChange} />
				<button onClick={this.checkPalindrome}>Check</button>
				{isPalindrome ? <p>{word} is a palindrome!</p> : <p>{word} is not a palindrome.</p>}
			</div>
		);
	}
}

export default PalindromeChecker;
