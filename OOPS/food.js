// Q2 — Online Food Ordering (map + reduce + error handling)

const menu = {
    pizza: 250,
    burger: 150,
    coffee: 80,
    fries: 100
};

function calculateBill(orderItems) {
    return orderItems
        .map(item => {
            if (!menu[item]) {
                throw new Error(`❌ Invalid item ordered: ${item}`);
            }
            return menu[item];
        })
        .reduce((total, price) => total + price, 0);
}

try {
    console.log("Bill:", calculateBill(["pizza", "coffee", "fries"]));
} catch (err) {
    console.log(err.message);
}

try {
    console.log("Bill:", calculateBill(["pizza", "pasta"])); // invalid
} catch (err) {
    console.log(err.message);
}
