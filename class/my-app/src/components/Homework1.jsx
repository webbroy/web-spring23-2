import React, { Component } from "react";

class Homework1 extends React.Component {
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

	// render() {
	// 	return (

	// 	);
	// }
}

export default Homework1;
