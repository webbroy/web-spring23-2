//Write a function that takes in an age (number). Check if the age is greater than or equal to 65 or not. If it is  equal to or greater than 65 return the string “Special discount” otherwise return “Not Allowed”//

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

////////////////////////////////////////////////////////
//Write a function that takes in an array of numbers and use the forEach() or map() to multiply every number by 100. The function should return a new array with the result. The original array should not be mutated.//

function multiplyBy100(numbers) {
	var multipliedArray = numbers.map(function (number) {
		return number * 100;
	});

	return multipliedArray;
}

var numbers = [1, 2, 3, 4, 5];
var multipliedNumbers = multiplyBy100(numbers);

console.log(multipliedNumbers); // Output: [100, 200, 300, 400, 500]
console.log(numbers); // Output: [1, 2, 3, 4, 5]

////////////////////////////////////////////////////////
//Write a function that takes in an array of numbers and use the forEach() or map() to multiply every number by 100 if the array provided to the function has a length greater than 5. The function should return a new array with the result. The original array should not be mutated.//

function multiplyBy100IfLengthGreaterThan5(numbers) {
	if (numbers.length > 5) {
		var multipliedArray = numbers.map(function (number) {
			return number * 100;
		});

		return multipliedArray;
	} else {
		return numbers.slice(); // Return a copy of the original array
	}
}

var numbers1 = [1, 2, 3, 4, 5];
var numbers2 = [1, 2, 3, 4, 5, 6, 7];

var multipliedNumbers1 = multiplyBy100IfLengthGreaterThan5(numbers1);
var multipliedNumbers2 = multiplyBy100IfLengthGreaterThan5(numbers2);

console.log(multipliedNumbers1); // Output: [1, 2, 3, 4, 5]
console.log(multipliedNumbers2); // Output: [100, 200, 300, 400, 500, 600, 700]

console.log(numbers1); // Output: [1, 2, 3, 4, 5]
console.log(numbers2); // Output: [1, 2, 3, 4, 5, 6, 7]

////////////////////////////////////////////////////////
//Write a function that takes in an array of numbers and uses the forEach() or map() to multiply every number by 100 only if the number is even - if the number is odd then it will return the original number . The function should return a new array with the result. The original array should not be mutated.//

function multiplyEvenBy100(numbers) {
	var multipliedArray = numbers.map(function (number) {
		if (number % 2 === 0) {
			return number * 100; // Multiply even numbers by 100
		} else {
			return number; // Return odd numbers as is
		}
	});

	return multipliedArray;
}

var numbers = [1, 2, 3, 4, 5, 6];
var multipliedNumbers = multiplyEvenBy100(numbers);

console.log(multipliedNumbers); // Output: [1, 200, 3, 400, 5, 600]
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

////////////////////////////////////////////////////////
//Write a function that takes in this array as input [154, 657, 564, 561, 154, 678, 100, 154] and returns the number of times 154 occurred or existed in that array.//

function countOccurrences(array, number) {
	var count = 0;
	array.forEach(function (element) {
		if (element === number) {
			count++;
		}
	});
	return count;
}

var numbers = [154, 657, 564, 561, 154, 678, 100, 154];
var targetNumber = 154;
var occurrenceCount = countOccurrences(numbers, targetNumber);

console.log(occurrenceCount); // Output: 3

////////////////////////////////////////////////////////
//Write a function that takes in an argument function checkType(input) - if the input is an array or javascript object then it returns the string “object” - otherwise it will return the string “It’s something else”.//

function checkType(input) {
	if (Array.isArray(input) || typeof input === "object") {
		return "object";
	} else {
		return "It's something else";
	}
}

var array = [1, 2, 3];
var object = { name: "John", age: 25 };
var string = "Hello";
var number = 42;

console.log(checkType(array)); // Output: "object"
console.log(checkType(object)); // Output: "object"
console.log(checkType(string)); // Output: "It's something else"
console.log(checkType(number)); // Output: "It's something else"
