// q4_car_constructor.js
// --------------------------------------------------
// Constructor function Car(brand, model)
// Prototype method getDetails()
// Demonstrates method sharing
// --------------------------------------------------

// Constructor Function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Prototype Method (shared by all Car objects)
Car.prototype.getDetails = function () {
    console.log(`Car: ${this.brand} ${this.model}`);
};

// Create Car Objects
const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

// Call shared prototype method
car1.getDetails(); // Car: Toyota Corolla
car2.getDetails(); // Car: Honda Civic
