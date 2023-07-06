import React, { useEffect, useState } from "react";

function Users() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch("https://jsonplaceholder.typicode.com/users");
				const data = await response.json();
				setUsers(data);
			} catch (error) {
				console.log("Error fetching users:", error);
			}
		};

		fetchUsers();
	}, []);

	return (
		<div>
			<h1>Users</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}

export default Users;
