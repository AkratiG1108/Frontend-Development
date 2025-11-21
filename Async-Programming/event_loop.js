// q2_event_loop.js
// --------------------------------------------------------
// Demonstrating Microtask vs Macrotask order in JS Event Loop
// --------------------------------------------------------

console.log("Start"); // 1st → synchronous

// Macrotask (setTimeout → goes to Macrotask Queue)
setTimeout(() => {
    console.log("Timeout Callback (Macrotask)");
}, 0);

// Microtask (Promise.then → goes to Microtask Queue)
Promise.resolve().then(() => {
    console.log("Promise.then Callback (Microtask)");
});

console.log("Middle Log"); // 2nd → synchronous

console.log("End"); // 3rd → synchronous

/* 
EXPECTED OUTPUT ORDER:
----------------------
Start
Middle Log
End
Promise.then Callback (Microtask)
Timeout Callback (Macrotask)

WHY?
----
1. JavaScript executes code in this order:
   a. Synchronous code (Call Stack)
   b. Microtasks (Microtask Queue -> e.g., Promise.then)
   c. Macrotasks (Macrotask Queue -> e.g., setTimeout)

2. Even if setTimeout(…, 0) has zero delay, it goes to the macrotask queue.

3. The Event Loop ALWAYS empties the Microtask Queue BEFORE checking the Macrotask Queue.

Therefore:
- Promise.then runs BEFORE setTimeout.
*/
// q2_event_loop.js
// --------------------------------------------------------
// Demonstrating Microtask vs Macrotask order in JS Event Loop
// --------------------------------------------------------

console.log("Start"); // 1st → synchronous

// Macrotask (setTimeout → goes to Macrotask Queue)
setTimeout(() => {
    console.log("Timeout Callback (Macrotask)");
}, 0);

// Microtask (Promise.then → goes to Microtask Queue)
Promise.resolve().then(() => {
    console.log("Promise.then Callback (Microtask)");
});

console.log("Middle Log"); // 2nd → synchronous

console.log("End"); // 3rd → synchronous

/* 
EXPECTED OUTPUT ORDER:
----------------------
Start
Middle Log
End
Promise.then Callback (Microtask)
Timeout Callback (Macrotask)

WHY?
----
1. JavaScript executes code in this order:
   a. Synchronous code (Call Stack)
   b. Microtasks (Microtask Queue -> e.g., Promise.then)
   c. Macrotasks (Macrotask Queue -> e.g., setTimeout)

2. Even if setTimeout(…, 0) has zero delay, it goes to the macrotask queue.

3. The Event Loop ALWAYS empties the Microtask Queue BEFORE checking the Macrotask Queue.

Therefore:
- Promise.then runs BEFORE setTimeout.
*/
