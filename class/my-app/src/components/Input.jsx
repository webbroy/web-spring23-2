import React from "react";

/**
 * Reusable input component with label and input
 * All attributes passed as props are applied to the label or input element
 * @returns {JSX.Element}
 */
const Input = ({ label, ...props }) => {
	return (
		<div>
			<label>{label}</label>
			<input {...props} />
		</div>
	);
};

export default Input;
