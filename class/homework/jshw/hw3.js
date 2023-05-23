function checkDiscountQualification(date) {
	switch (date) {
		case 1:
			return "Too early";
		case 15:
			return "Here is your discount";
		case 30:
			return "Too late";
		default:
			return "Not a valid date";
	}
}

console.log(checkDiscountQualification(1)); // Output: "Too early"
console.log(checkDiscountQualification(15)); // Output: "Here is your discount"
console.log(checkDiscountQualification(30)); // Output: "Too late"
console.log(checkDiscountQualification(10)); // Output: "Not a valid date"

//////////////////////////////////////////////////////////////////

function constructNumberArray(num1, num2) {
	const numberArray = [];
	let currentNumber = num1 + 1;

	while (currentNumber < num2) {
		numberArray.push(currentNumber);
		currentNumber++;
	}

	return numberArray;
}

console.log(constructNumberArray(2, 117)); // Output: [3, 4, ..., 115, 116]

/////////////////////////////////////////////////////////////////////////

function getObjectKeys(obj) {
	const keys = [];

	for (let key in obj) {
		keys.push(key);
	}

	return keys;
}

const myObject = {
	name: "Jack",
	email: "jack@gmail.com",
	age: 30,
};

console.log(getObjectKeys(myObject)); // Output: ["name", "email", "age"]
