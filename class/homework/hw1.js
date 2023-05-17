function checkAge(age) {
	if (age >= 65) {
		return "Special discount";
	} else {
		return "Not Allowed";
	}
}

console.log(checkAge(70)); // Output: "Special discount"
console.log(checkAge(60)); // Output: "Not Allowed"
console.log(checkAge(65)); // Output: "Special discount"
