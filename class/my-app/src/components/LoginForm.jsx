import React, { Fragment, useState } from "react";

const LoginForm = () => {
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setForm((prevForm) => ({
			...prevForm,
			[name]: value,
		}));
	};

	const handleLogin = (event) => {
		event.preventDefault();

		if (form.email === "" || form.password.length < 5) {
			console.log("Invalid input");
			return;
		}

		console.log("Form submitted:", form);
	};

	const handleGoBack = () => {
		console.log("Go back");
		setForm({
			email: "",
			password: "",
		});
	};

	return (
		<Fragment>
			<h1>Login</h1>
			<form onSubmit={handleLogin}>
				<div>
					<label htmlFor="email">Email: </label>
					<input type="email" id="email" name="email" placeholder="user@domain.com" required value={form.email} onChange={handleChange} />
				</div>

				<div>
					<label htmlFor="password">Password: </label>
					<input type="password" id="password" name="password" required value={form.password} onChange={handleChange} />
				</div>

				<button type="submit">Login</button>
				<button type="button" onClick={handleGoBack}>
					Go Back
				</button>
			</form>
		</Fragment>
	);
};

export default LoginForm;
