// Given an array month: ['Jan', 'Feb', 'Mar'] and a date array: [1, 2, …, 10 ]

// Write a function called “printCalendar” that loops through both arrays and print out a combination of month and date. Date only goes up to 10

// Ex: Jan 1, Jan 2 …, Mar 10

// Hint: Use 2 loops

function printCalendar(month, date) {
	for (let i = 0; i < month.length; i++) {
		for (let j = 0; j < date.length; j++) {
			console.log(`${month[i]} ${date[j]}`);
		}
	}
}

const months = ["Jan", "Feb", "Mar"];
const dates = Array.from({ length: 10 }, (_, i) => i + 1);

printCalendar(months, dates);

////////////////////////////////////////////////
//Create a function called “cloneArray” that will take any array and return a copy of the array//

function cloneArray(array) {
	return [...array];
}
const originalArray = [1, 2, 3, 4, 5];
const clonedArray = cloneArray(originalArray);

console.log(originalArray); // Output: [1, 2, 3, 4, 5]
console.log(clonedArray); // Output: [1, 2, 3, 4, 5]

////////////////////////////////////////////////////////////////////
//Write a function that takes in an array arr and a number n

// The function should be called getNthElement

// The function should check if the array has an element in the nth position or not

// If an element exist then it should return that element, otherwise it will return the string “element does not exist”

// Ex: function getNthElement (arr, n) { … }

function getNthElement(arr, n) {
	if (n >= 0 && n < arr.length) {
		return arr[n];
	} else {
		return "element does not exist";
	}
}
const array = [1, 2, 3, 4, 5];

console.log(getNthElement(array, 2)); // Output: 3
console.log(getNthElement(array, 6)); // Output: "element does not exist"

//////////////////////////////////////////////////////////////////////////
//Write your own custom array.push and array.pop method called “customPush” and “customPop”
//customPush will take in 2 parameter, an array and an item to push into the array
//customPush will return the length of the array after adding in the item
//Ex: customPush(arr, item) { ... }
//customPop will take in an array and remove the last element and return the removed element//

function customPush(arr, item) {
	arr[arr.length] = item;
	return arr.length;
}

function customPop(arr) {
	if (arr.length === 0) {
		return undefined;
	}

	const lastElement = arr[arr.length - 1];
	arr.length = arr.length - 1;
	return lastElement;
}
const array1 = [1, 2, 3];

console.log(customPush(array1, 4)); // Output: 4 (length of the array after pushing 4)
console.log(array1); // Output: [1, 2, 3, 4]

console.log(customPop(array)); // Output: 4 (removed element)
console.log(array); // Output: [1, 2, 3]

/////////////////////////////////////////////////////////////
//Complete the code to make the customReduce method work//

function customReduce(arr, callback, initialValue) {
	let accumulator = initialValue !== undefined ? initialValue : arr[0];

	for (let i = initialValue !== undefined ? 0 : 1; i < arr.length; i++) {
		accumulator = callback(accumulator, arr[i], i, arr);
	}

	return accumulator;
}
const array2 = [1, 2, 3, 4, 5];

const sum = customReduce(array2, (accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

const product = customReduce(array2, (accumulator, currentValue) => accumulator * currentValue, 1);
console.log(product); // Output: 120
