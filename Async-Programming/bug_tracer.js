// q3_bug_tracker.js
// ----------------------------------------------------
// Modern Bug Tracker using Promises
// Includes random API failure & console.table()
// ----------------------------------------------------

// Promise version of fetchBugs()
function getBugs() {
    return new Promise((resolve, reject) => {
        const hasError = Math.random() < 0.3; // 30% chance of failure

        setTimeout(() => {
            if (hasError) {
                reject("❌ Failed to fetch bugs. Server error!");
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

// Using the Promise
getBugs()
    .then(bugs => {
        console.log("✔ Bugs fetched successfully!");
        console.table(bugs);   // neat table format
    })
    .catch(error => {
        console.log("⚠ ERROR:", error);
    });
