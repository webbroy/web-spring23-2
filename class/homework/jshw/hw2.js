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

function cloneArray(array) {
	return [...array];
}
const originalArray = [1, 2, 3, 4, 5];
const clonedArray = cloneArray(originalArray);

console.log(originalArray); // Output: [1, 2, 3, 4, 5]
console.log(clonedArray); // Output: [1, 2, 3, 4, 5]

////////////////////////////////////////////////////////////////////

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
