// q4_devops_delay.js
// ------------------------------------------------------
// Simulate two deployment servers responding asynchronously
// with Promise.all() and Promise.race()
// Includes random failure
// ------------------------------------------------------

// Server A – responds in 2 seconds
function serverA() {
    return new Promise((resolve, reject) => {
        console.log("Server A: Deployment started...");

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("❌ Server A failed during deployment");
            } else {
                resolve("✅ Server A completed deployment");
            }
        }, 2000);
    });
}

// Server B – responds in 3 seconds
function serverB() {
    return new Promise((resolve, reject) => {
        console.log("Server B: Deployment started...");

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("❌ Server B failed during deployment");
            } else {
                resolve("✅ Server B completed deployment");
            }
        }, 3000);
    });
}

// -------------------- Promise.all() --------------------
Promise.all([serverA(), serverB()])
    .then(results => {
        console.log("\n📦 Deployment completed for all servers!");
        console.log(results); // logs both resolved values
    })
    .catch(error => {
        console.log("\n⚠ Deployment error (Promise.all):", error);
    });

// -------------------- Promise.race() --------------------
Promise.race([serverA(), serverB()])
    .then(fastest => {
        console.log("\n⚡ Fastest response:", fastest);
    })
    .catch(error => {
        console.log("\n⚠ Fastest failure (Promise.race):", error);
    });
