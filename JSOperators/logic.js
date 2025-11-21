// Security condition variables (change these to test)
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Access condition:
// Alarm must be ON AND door closed AND window closed AND owner inside
let isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

// Output using Boolean logic
if (isSecure) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Testing multiple outcomes
console.log("\n--- Testing Different Values ---");

// Test 1
isDoorLocked = false;
console.log("Test 1 (Door unlocked):", isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside ? "Secure" : "Unsafe");

// Test 2
isWindowClosed = false;
console.log("Test 2 (Window open):", isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside ? "Secure" : "Unsafe");

// Test 3
isAlarmOn = false;
console.log("Test 3 (Alarm off):", isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside ? "Secure" : "Unsafe");

// Test 4
isOwnerInside = false;
console.log("Test 4 (Owner outside):", isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside ? "Secure" : "Unsafe");
