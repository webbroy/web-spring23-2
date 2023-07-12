import React from "react";

/**
 * TODO: Build a reusable input component with label and input
 * All attributes passed as props must be passed onto the label or input node
 * Your component must contain styles as well
 * @returns
 */

const Input = ({ label, id, ...otherProps }) => {
	return (
		<div className="text-left flex justify-between">
			<label htmlFor={id}>{label}</label>
			<input id={id} className="border-2 border-black rounded-md px-2 py-1" {...otherProps} />
		</div>
	);
};

export default Input;
