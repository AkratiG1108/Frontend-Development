// Q1 – E-Commerce Product Manager
// ------------------------------------
// Using ES6 Class, Objects, Array, and Filters
// Tested using Node.js Console
// ------------------------------------

// Product class definition
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = Number(price);
        this.category = category;
    }

    // Method: apply discount (percentage as number)
    applyDiscount(percent) {
        const discountAmount = (this.price * percent) / 100;
        this.price = this.price - discountAmount;
        return this.price;
    }

    // Method: display product details
    getDetails() {
        return `
Product Details
----------------------
ID       : ${this.id}
Name     : ${this.name}
Price    : ₹${this.price}
Category : ${this.category}
        `;
    }
}

// Create multiple product objects
const products = [
    new Product(101, "Bluetooth Speaker", 2500, "Electronics"),
    new Product(102, "Notebook", 150, "Stationery"),
    new Product(103, "Smartwatch", 3999, "Wearables"),
    new Product(104, "Pen", 30, "Stationery"),
];

// Apply discount to all products
products.forEach(p => p.applyDiscount(10));  // apply 10% discount

// Display products with price > 1000
const expensiveProducts = products.filter(p => p.price > 1000);

console.log("=== Products with Price > 1000 ===");
expensiveProducts.forEach(p => console.log(p.getDetails()));
