// Global variable
let bonus = 5000;  

function calculateSalary(isPermanent) {

    // Local variable
    let salary = 40000;  

    console.log("Inside function:");
    console.log("Local salary:", salary);
    console.log("Global bonus before calculation:", bonus);

    // Add bonus only if employee is permanent
    if (isPermanent === true) {
        salary = salary + bonus;
    }

    console.log("Total salary:", salary);
    console.log("------------------------------");
}

// Calling function with different isPermanent values
calculateSalary(true);   // Employee is permanent
calculateSalary(false);  // Employee is not permanent

console.log("Outside function - Global bonus is still:", bonus);
