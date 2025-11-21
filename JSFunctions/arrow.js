// q3_user_object.js
// -------------------------------------------------
// Demonstrate why arrow functions should NOT be used
// as object methods when accessing `this`.
// -------------------------------------------------

// Object with arrow function method
const user = {
    name: "Akrati",
    showName: () => {
        console.log("Arrow Output:", this.name);
    }
};

// Log output
user.showName();
