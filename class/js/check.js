class Store {
	#numberOfEmployees = 0;

	constructor(name, yearRegistered) {
		this.name = name;
		this.yearRegistered = yearRegistered;
		this.isOpen = false;
	}

	openStore() {
		this.isOpen = true;
	}

	closeStore() {
		this.isOpen = false;
	}

	getNumberOfEmployees() {
		return this.#numberOfEmployees;
	}

	updateNumberOfEmployees(newCount) {
		if (typeof newCount === "number") {
			this.#numberOfEmployees = newCount;
		}
	}
}

const myBakery = new Store("85 degrees", "2023");
console.log("before open", myBakery.isOpen);

myBakery.openStore();
console.log("after open", myBakery.isOpen);

myBakery.closeStore();
console.log("after closing", myBakery.isOpen);

console.log("number of employees", myBakery.getNumberOfEmployees());

myBakery.updateNumberOfEmployees(10);
console.log("number of employees", myBakery.getNumberOfEmployees());

myBakery.updateNumberOfEmployees("invalid");
console.log("number of employees", myBakery.getNumberOfEmployees());
