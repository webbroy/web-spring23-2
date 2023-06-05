function Animal(color, eyes, legs) {
	this.color = color;
	this.eyes = eyes;
	this.legs = legs;
}

Animal.prototype.eat = function () {
	console.log("The animal is eating.");
};

Animal.prototype.sleep = function () {
	console.log("The animal is sleeping.");
};

const lion = new Animal("brown", 2, 4);
const snake = new Animal("green", 2, 0);
const bird = new Animal("blue", 2, 2);

console.log(lion.color); // Output: "brown"
console.log(snake.legs); // Output: 0
bird.eat(); // Output: "The animal is eating."

////////////////////////////////////////////////////////////////////////

function Bird(name, color, eyes, legs) {
	this._name = name;
	this.color = color;
	this.eyes = eyes;
	this.legs = legs;
}

Bird.prototype.eat = function () {
	console.log(`${this._name} is eating.`);
};

Bird.prototype.sleep = function () {
	console.log(`${this._name} is sleeping.`);
};

Bird.prototype.getName = function () {
	return this._name;
};

Bird.prototype.setName = function (newName) {
	this._name = newName;
};

const parrot = new Bird("Polly", "green", 2, 2);

console.log(parrot.getName()); // Output: "Polly"
parrot.setName("Rio");
console.log(parrot.getName()); // Output: "Rio"

parrot.eat(); // Output: "Rio is eating."
parrot.sleep(); // Output: "Rio is sleeping."
