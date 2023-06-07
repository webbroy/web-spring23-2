class Building {
	constructor(hasWalls, numOfWalls, roofShape) {
		this._hasWalls = hasWalls;
		this._numOfWalls = numOfWalls;
		this._roofShape = roofShape;
	}

	get hasWalls() {
		return this._hasWalls;
	}

	get numOfWalls() {
		return this._numOfWalls;
	}

	get roofShape() {
		return this._roofShape;
	}

	openDoor() {
		console.log("Opening building door...");
	}

	closeDoor() {
		console.log("Closing building door...");
	}
}

class Gym extends Building {
	constructor(gymName, hasPool) {
		super(true, 4, "Flat");
		this._gymName = gymName;
		this._hasPool = hasPool;
	}

	get gymName() {
		return this._gymName;
	}

	get hasPool() {
		return this._hasPool;
	}

	openGym() {
		console.log("Opening gym...");
	}

	closeGym() {
		console.log("Closing gym...");
	}
}

class Bank extends Building {
	constructor(numOfVault, numOfStaff, name) {
		super(true, 4, "Sloping");
		this._numOfVault = numOfVault;
		this._numOfStaff = numOfStaff;
		this._name = name;
	}

	get numOfVault() {
		return this._numOfVault;
	}

	get numOfStaff() {
		return this._numOfStaff;
	}

	get name() {
		return this._name;
	}

	openBank() {
		console.log("Opening bank...");
	}

	closeBank() {
		console.log("Closing bank...");
	}
}

console.log("My Gym", new Gym("Fitzone", true));
console.log("My Bank", new Bank(5, 10, "PNC"));
