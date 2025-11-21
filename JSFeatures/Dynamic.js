const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

// Arrays to store valid and invalid numeric data
let validNumbers = [];
let invalidNumbers = [];

// Process each item
for (let item of apiData) {

    // Convert into different data types
    let numValue = Number(item);
    let boolValue = Boolean(item);
    let strValue = String(item);

    console.log(`Original: ${item}`);
    console.log(` → Number: ${numValue}`);
    console.log(` → Boolean: ${boolValue}`);
    console.log(` → String: "${strValue}"`);

    // Check for invalid numbers
    if (isNaN(numValue)) {
        invalidNumbers.push(item);
        console.log("   ❌ Invalid Number");
    } else {
        validNumbers.push(numValue);
        console.log("   ✅ Valid Number");
    }

    console.log("---------------------------");
}

// Final report
console.log("\n====== FINAL REPORT ======");
console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Numeric Entries:", invalidNumbers);
