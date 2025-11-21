"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

// Arrays to store categorized results
let validTransactions = [];
let invalidTransactions = [];

for (let txn of transactions) {
    try {
        // ---- CUSTOM ERROR CHECKS ---- //

        // Case 1: Null entry
        if (txn === null) {
            throw new Error("Null transaction entry");
        }

        // Case 2: Missing id or amount
        if (txn.id === undefined || txn.amount === undefined) {
            throw new Error("Missing transaction ID or amount");
        }

        // Case 3: Negative amount
        if (txn.amount < 0) {
            throw new Error("Negative transaction amount");
        }

        // If everything is valid, save it
        validTransactions.push(txn);

    } catch (err) {
        // Store the failed transaction along with its error message
        invalidTransactions.push({
            transaction: txn,
            error: err.message
        });
    }
}

console.log("\n===== FINAL TRANSACTION REPORT =====");

console.log("\nValid Transactions:");
console.log(validTransactions);

console.log("\nInvalid Transactions:");
console.log(invalidTransactions);

console.log(`
-------------------------------
Successful Transactions: ${validTransactions.length}
Failed Transactions    : ${invalidTransactions.length}
-------------------------------
`);
