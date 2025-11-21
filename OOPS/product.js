// Q3 — Product Discount System (Constructor + prototype)

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    return this.price - (this.price * percent) / 100;
};

const p1 = new Product("Laptop", 50000);
const p2 = new Product("Shoes", 2000);
const p3 = new Product("Watch", 3000);

console.log("Laptop after 10%:", p1.applyDiscount(10));
console.log("Shoes after 20%:", p2.applyDiscount(20));
console.log("Watch after 30%:", p3.applyDiscount(30));

// Abstraction: user doesn't need to know formula, just calls applyDiscount()
