// q1_callback.js
// -----------------------------------------------------
// Function greetUser(name, callback) that greets the user
// and then executes a callback function.
// -----------------------------------------------------

// Callback function that prints final message
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Function that accepts a name and a callback
function greetUser(name, callback) {
    console.log(`Hello ${name}`);

    // Execute the callback
    callback();
}

// Demonstration of callback flow
greetUser("Akrati", showEndMessage);
