import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const UserHw = () => {
	const [userId, setUserId] = useState(0);
	const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/users/${userId}`, [userId]);

	const handleUserIdChange = (event) => {
		setUserId(event.target.value);
	};

	if (loading) {
		return (
			<div>
				<h1>User By Id</h1>
				<br />
				<label>
					User Id to Fetch:
					<Input type="text" value={userId} onChange={handleUserIdChange} />
				</label>
				<div>
					<h2>Loading...</h2>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div>
				<h1>User By Id</h1>
				<br />
				<label>
					User Id to Fetch:
					<Input type="text" value={userId} onChange={handleUserIdChange} />
				</label>
				<div>
					<h2>An error occurred: {error?.message}</h2>
				</div>
			</div>
		);
	}

	return (
		<div>
			<h1>User By Id</h1>
			<br />
			<label>
				User Id to Fetch:
				<Input type="text" value={userId} onChange={handleUserIdChange} />
			</label>
			<div>
				<h2>User Data</h2>
				{data && (
					<ul>
						<li>User Id: {data.id}</li>
						<li>Name: {data.name}</li>
						<li>Username: {data.username}</li>
						<li>Email: {data.email}</li>
					</ul>
				)}
			</div>
		</div>
	);
};

export default UserHw;
