// Q3 – Library Management System
// ----------------------------------------------
// Using ES6 Classes, Objects, Methods and Arrays
// ----------------------------------------------

class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    // Issue the book
    issueBook() {
        if (this.isIssued) {
            console.log(`❌ Book "${this.title}" is already issued.`);
        } else {
            this.isIssued = true;
            console.log(`✅ Book "${this.title}" has been issued successfully.`);
        }
    }

    // Return the book
    returnBook() {
        if (!this.isIssued) {
            console.log(`❌ Book "${this.title}" was not issued.`);
        } else {
            this.isIssued = false;
            console.log(`📚 Book "${this.title}" has been returned.`);
        }
    }

    // Display details
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}, Issued: ${this.isIssued}`;
    }
}

// Create an array of book objects
const library = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN001", false),
    new Book("Atomic Habits", "James Clear", "ISBN002", true),
    new Book("Data Structures", "Narasimha Karumanchi", "ISBN003", false),
    new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "ISBN004", false)
];

// Display all available (not issued) books
console.log("=== AVAILABLE BOOKS ===");
library
    .filter(book => !book.isIssued)
    .forEach(book => console.log(book.getDetails()));

// Function to issue book by ISBN
function issueBookByISBN(searchISBN) {
    const book = library.find(b => b.ISBN === searchISBN);

    if (!book) {
        console.log(`❌ No book found with ISBN: ${searchISBN}`);
        return;
    }

    book.issueBook(); // Call the method inside the class
}

// Example Testing (you can change ISBN)
console.log("\nIssuing Book ISBN003...\n");
issueBookByISBN("ISBN003");
