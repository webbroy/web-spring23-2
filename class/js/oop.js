// const cat = {
// 	name: "Tom",

// 	// method (services/functions)
// 	// greet METHOD (function that belongs to an objhect) written with function name as a "key"
// 	greet: function () {
// 		console.log("meow");
// 	},

// 	// es6 method notation (no colon and no "function" keyword is used)
// 	// "this" refers to the object instance itself (in case it refers to our object "cat")
// 	// this.name => cat.name
// 	getName(p1, p2) {
// 		console.log("p1: ", p1);
// 		console.log("p2: ", p2);
// 		// console.log("this in normal function", this);
// 		return this.name;
// 	},

// 	// arrow function as a method - avoid using array functions for writing methods due to improper "this" binding
// 	getNameArrow: () => {
// 		console.log("this in arrow function", this);
// 		return this.name;
// 	},
// };

// const dog = {
// 	name: "Ruff",
// };

// const bird = {
// 	name: "Robin",
// };

// // this.name = "dave";
// // console.log("normal function", cat.getName());
// // console.log("arrow function", cat.getNameArrow());

// // manually bind the "this" keyword to objects
// // const getNameFromDog = cat.getName.bind(dog);
// // console.log(getNameFromDog());

// console.log(cat.getName.call(dog, "arg1", "arg2"));
// cat.getName.apply(null, ["arg3, arg4"]);
// cat.getName.apply(null, ["arg3", "arg4"]);

// bind does not work with arrow functions
// const getNameFromDogArrow = cat.getNameArrow.bind(dog);
// console.log(getNameFromDogArrow());

// const array = {
// 	length: 0,
// 	push: function () {},
// 	forEach: function () {},
// };

// custom forEach method
// Array.prototype.customForEach = function (callbackfn) {
// 	const originalArray = this;

// 	for (let i = 0; i < originalArray.length; i++) {
// 		const element = this[i];
// 		callbackfn(element, i, this);
// 	}
// };

// const arrA = [1, 2, 3]
// arrA.customForEach(function(num, idx, arr) {
//     console.log(num)
// })
// const z = [{}];
// const c = globalThis.structuredClone(z);
// console.log(z[0] === c[0]);

// const cow = {
// 	getName(p1, p2) {
// 		console.log(p1);
// 		console.log(p2);
// 	},
// };

// cow.getName.apply(null, ["arg9", "arg10"]);
//////////////////////////////////////////////////////////////////////
// const cat = {
// 	name: "Tom",

// 	// method (services/functions)
// 	// greet METHOD (function that belongs to an objhect) written with function name as a "key"
// 	greet: function () {
// 		console.log("meow");
// 	},

// 	// es6 method notation (no colon and no "function" keyword is used)
// 	// "this" refers to the object instance itself (in case it refers to our object "cat")
// 	// this.name => cat.name
// 	getName(p1, p2) {
// 		console.log("p1: ", p1);
// 		console.log("p2: ", p2);
// 		// console.log("this in normal function", this);
// 		return this.name;
// 	},

// 	// arrow function as a method - avoid using array functions for writing methods due to improper "this" binding
// 	getNameArrow: () => {
// 		console.log("this in arrow function", this);
// 		return this.name;
// 	},
// };

// const dog = {
// 	name: "Ruff",
// };

// const bird = {
// 	name: "Robin",
// };

// // this.name = "dave";
// // console.log("normal function", cat.getName());
// // console.log("arrow function", cat.getNameArrow());

// // manually bind the "this" keyword to objects
// // const getNameFromDog = cat.getName.bind(dog);
// // console.log(getNameFromDog(999, 1000));

// // console.log(cat.getName.call(dog, "arg1", "arg2"));
// // console.log(cat.getName.apply(dog, ["arg3", "arg4"]));

// // bind does not work with arrow functions
// // const getNameFromDogArrow = cat.getNameArrow.bind(dog);
// // console.log(getNameFromDogArrow());

// // const array = {
// // 	length: 0,
// // 	push: function () {},
// // 	forEach: function () {},
// // };

// // custom forEach method
// // Array.prototype.customForEach = function (callbackfn) {
// // 	const originalArray = this;

// // 	for (let i = 0; i < originalArray.length; i++) {
// // 		const element = this[i];
// // 		callbackfn(element, i, this);
// // 	}
// // };

// // const arrA = [1, 2, 3]
// // arrA.customForEach(function(num, idx, arr) {
// //     console.log(num)
// // })
// // const z = [{}];
// // const c = globalThis.structuredClone(z);
// // console.log(z[0] === c[0]);

// // const cow = {
// // 	getName(p1, p2) {
// // 		console.log(p1);
// // 		console.log(p2);
// // 	},
// // };

// // cow.getName.apply(null, ["arg9", "arg10"]);

// // WRITE THE CONSTRUCTOR FOR OBJECTS
// const car1 = {
// 	brand: "ford",
// 	year: "1990",
// 	color: "red",
// 	model: "mustang",
// };

// const car2 = {
// 	brand: "toyota",
// 	year: "1998",
// 	color: "white",
// 	model: "corolla",
// };

// // FAKE example of a constructor function
// function generateCar(brand, year, color, model) {
// 	return {
// 		brand: brand,
// 		year: year,
// 		color: color,
// 		model: model,
// 	};
// }
// // FAKE example of how to use constructor functions
// const car3 = generateCar("tesla", "2020", "white", "model y");

// // REAL CONSTRUCTOR FUNCTIONS
// function Car(brand, year, color, model) {
// 	// notice, capital case function name & name should be the class of object
// 	// we don't return anything from a constructor function
// 	this.brand = brand;
// 	this.year = year;
// 	this.color = color;
// 	this.model = model;
// }

// // methods in constructor functions or in the constructor's prototype
// Car.prototype.beep = function () {
// 	console.log("beep beep");
// };

// // you can visualize a object to look something like this
// // const car6 = {
// // 	// ... custom properties,
// // 	prototype: {
// // 		beep: function () {
// // 			console.log("beep beep");
// // 		}
// // 	}
// // }

// const car4 = new Car("tesla", "2020", "red", "model 3");
// const car5 = new Car("toyota", "2022", "white", "prius");
// // console.log(car3);
// // console.log(car4);

// // ES6 "class" keyword
// class Store {
// 	constructor(name, yearRegistered) {
// 		this.name = name;
// 		this.yearRegistered = yearRegistered;
// 		this.isOpen = false;
// 		this.numberOfEmployees = 0;
// 	}

// 	// es6 method notation
// 	openStore() {
// 		this.isOpen = true;
// 	}

// 	closeStore() {
// 		this.isOpen = false;
// 	}
// }

// const myBakery = new Store("85 degrees", "2023");
// console.log("before open", myBakery.isOpen);

// myBakery.openStore();
// console.log("after open", myBakery.isOpen);

// myBakery.closeStore();
// console.log("after closing", myBakery.isOpen);

////////////////////////////////////////////////////////////////////

const cat = {
	name: "Tom",

	// method (services/functions)
	// greet METHOD (function that belongs to an objhect) written with function name as a "key"
	greet: function () {
		console.log("meow");
	},

	// es6 method notation (no colon and no "function" keyword is used)
	// "this" refers to the object instance itself (in case it refers to our object "cat")
	// this.name => cat.name
	getName(p1, p2) {
		console.log("p1: ", p1);
		console.log("p2: ", p2);
		// console.log("this in normal function", this);
		return this.name;
	},

	// arrow function as a method - avoid using array functions for writing methods due to improper "this" binding
	getNameArrow: () => {
		console.log("this in arrow function", this);
		return this.name;
	},
};

const dog = {
	name: "Ruff",
};

const bird = {
	name: "Robin",
};

// this.name = "dave";
// console.log("normal function", cat.getName());
// console.log("arrow function", cat.getNameArrow());

// manually bind the "this" keyword to objects
// const getNameFromDog = cat.getName.bind(dog);
// console.log(getNameFromDog(999, 1000));

// console.log(cat.getName.call(dog, "arg1", "arg2"));
// console.log(cat.getName.apply(dog, ["arg3", "arg4"]));

// bind does not work with arrow functions
// const getNameFromDogArrow = cat.getNameArrow.bind(dog);
// console.log(getNameFromDogArrow());

// const array = {
// 	length: 0,
// 	push: function () {},
// 	forEach: function () {},
// };

// custom forEach method
// Array.prototype.customForEach = function (callbackfn) {
// 	const originalArray = this;

// 	for (let i = 0; i < originalArray.length; i++) {
// 		const element = this[i];
// 		callbackfn(element, i, this);
// 	}
// };

// const arrA = [1, 2, 3]
// arrA.customForEach(function(num, idx, arr) {
//     console.log(num)
// })
// const z = [{}];
// const c = globalThis.structuredClone(z);
// console.log(z[0] === c[0]);

// const cow = {
// 	getName(p1, p2) {
// 		console.log(p1);
// 		console.log(p2);
// 	},
// };

// cow.getName.apply(null, ["arg9", "arg10"]);

// WRITE THE CONSTRUCTOR FOR OBJECTS
const car1 = {
	brand: "ford",
	year: "1990",
	color: "red",
	model: "mustang",
};

const car2 = {
	brand: "toyota",
	year: "1998",
	color: "white",
	model: "corolla",
};

// FAKE example of a constructor function
function generateCar(brand, year, color, model) {
	return {
		brand: brand,
		year: year,
		color: color,
		model: model,
	};
}
// FAKE example of how to use constructor functions
const car3 = generateCar("tesla", "2020", "white", "model y");

// REAL CONSTRUCTOR FUNCTIONS
function Car(brand, year, color, model) {
	// notice, capital case function name & name should be the class of object
	// we don't return anything from a constructor function
	this.brand = brand;
	this.year = year;
	this.color = color;
	this.model = model;
}

// methods in constructor functions or in the constructor's prototype
Car.prototype.beep = function () {
	console.log("beep beep");
};

// you can visualize a object to look something like this
// const car6 = {
// 	// ... custom properties,
// 	prototype: {
// 		beep: function () {
// 			console.log("beep beep");
// 		}
// 	}
// }

const car4 = new Car("tesla", "2020", "red", "model 3");
const car5 = new Car("toyota", "2022", "white", "prius");
// console.log(car3);
// console.log(car4);

// ES6 "class" keyword
class Store {
	// OOP PRINCIPLES: ENCAPSULATION: using private variables and preventing them from being exposed;
	#isOpen;

	// turn 'numberOfEmployees' to a private variable
	// write a method for returning the 'numberOfEmployees'
	// write another method for updating the 'numberOfEmployees' - method should take in a number, if not a number, don't update it
	#numberOfEmployees;

	// utility variable or utility methods, we expose with the "static" keyword - just call store constructor to use
	static maxYearOfRegistration = 25;

	// constructors set instance level variables
	constructor(name, yearRegistered) {
		this.name = name;
		this.yearRegistered = yearRegistered;
		this.#isOpen = false;
		this.#numberOfEmployees = 0;

		// methods for each instance (uses more memory since it gets created for each instance)
		// this.openStore = function () {};
		// this.closeStore = function () {};
	}

	// es6 method notation - these methods get stored in a single Store.prototype object
	openStore() {
		this.#isOpen = true;
	}

	closeStore() {
		this.#isOpen = false;
	}

	// getter & setters
	getIsOpen() {
		return this.#isOpen;
	}

	getNumberOfEmployees() {
		return this.#numberOfEmployees;
	}

	setNumberOfEmployees(newNumberOfEmployees) {
		if (typeof newNumberOfEmployees !== "number") return;
		this.#numberOfEmployees = newNumberOfEmployees;
	}
}

const myBakery = new Store("85 degrees", "2023");
// console.log("before open", myBakery.getIsOpen());

// myBakery.openStore();
// console.log("after open", myBakery.getIsOpen());

// myBakery.closeStore();
// console.log("after closing", myBakery.getIsOpen());

// console.log(Store.maxYearOfRegistration);
// Example of static method on the Array constructor
// console.log("is array", Array.isArray([]));
// console.log("is array", Array.isArray(new Array()));

console.log(myBakery.getNumberOfEmployees());
myBakery.setNumberOfEmployees(100);
console.log(myBakery.getNumberOfEmployees());
