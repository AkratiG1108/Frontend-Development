// q5_inheritance.js
// ----------------------------------------------------
// Person constructor → Student constructor
// Inheritance using prototypes
// Methods added via prototype
// Demonstrate prototype chain
// ----------------------------------------------------

// Parent constructor
function Person(name) {
    this.name = name;
}

// Method in Person prototype
Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

// Child constructor
function Student(name, branch) {
    // Inherit Parent properties
    Person.call(this, name);
    this.branch = branch;
}

// Inherit Person prototype → Student prototype
Student.prototype = Object.create(Person.prototype);

// Reset constructor reference
Student.prototype.constructor = Student;

// Add Student-specific method
Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

// Demonstration
const student1 = new Student("Akrati", "Computer Science");

student1.showName();    // From Person prototype
student1.showBranch();  // From Student prototype

// Checking Prototype Chain
console.log(
    "Is student1 instance of Student? ", student1 instanceof Student
);
console.log(
    "Is student1 instance of Person? ", student1 instanceof Person
);
console.log(
    "Student prototype's parent:", Object.getPrototypeOf(Student.prototype)
);
