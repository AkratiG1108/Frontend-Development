// Q4 — Employee Inheritance + Overriding (Polymorphism)

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} works in ${this.department}`;
    }
}

class Manager extends Employee {
    work() {
        return `${this.name} manages the team in ${this.department}`;
    }
}

// Runtime Polymorphism
const e1 = new Employee("Rahul", "Sales");
const m1 = new Manager("Sonia", "Marketing");

console.log(e1.work());
console.log(m1.work());
