// q2_applyOperation.js
// --------------------------------------------------
// Function applyOperation(array, callback)
// Applies the callback to each element and returns
// a new transformed array.
// --------------------------------------------------

// Higher-order function
function applyOperation(numbers, operation) {
    const result = [];

    for (let num of numbers) {
        result.push(operation(num)); // Apply callback
    }

    return result;
}

// Callback: double the number
function doubleNumber(n) {
    return n * 2;
}

// Callback: square the number
function squareNumber(n) {
    return n * n;
}

// Test arrays
const numbers = [1, 2, 3, 4];

// Apply operations
const doubled = applyOperation(numbers, doubleNumber);
const squared = applyOperation(numbers, squareNumber);

// Display results
console.log("Original:", numbers);
console.log("Doubled :", doubled);
console.log("Squared :", squared);
