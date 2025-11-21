// q1_async_coffee.js
// ------------------------------------------------------
// Asynchronous Coffee Maker using Promises + .then() chain
// Each step: 1–2 seconds, random failure simulation
// ------------------------------------------------------

// Utility: random delay between 1–2 seconds
function delay() {
    return Math.floor(Math.random() * 1000) + 1000;
}

// Step 1: Boil Water
function boilWater() {
    return new Promise((resolve, reject) => {
        console.log("Starting to boil water...");

        setTimeout(() => {
            if (Math.random() < 0.2) {  // 20% chance of failure
                reject("❌ Water boiler malfunction!");
            } else {
                resolve("✅ Water boiled.");
            }
        }, delay());
    });
}

// Step 2: Brew Coffee
function brewCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Brewing coffee...");

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("❌ Coffee machine jammed!");
            } else {
                resolve("✅ Coffee brewed.");
            }
        }, delay());
    });
}

// Step 3: Pour Coffee
function pourCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Pouring coffee into cup...");

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("❌ Spilled the coffee!");
            } else {
                resolve("✅ Coffee poured.");
            }
        }, delay());
    });
}

// ---- Promise Chaining ----
boilWater()
    .then(result => {
        console.log(result);
        return brewCoffee();
    })
    .then(result => {
        console.log(result);
        return pourCoffee();
    })
    .then(result => {
        console.log(result);
        console.log("☕ Coffee ready for the team!");
    })
    .catch(error => {
        console.log("PROCESS FAILED:", error);
        console.log("⚠ Please try again!");
    });
