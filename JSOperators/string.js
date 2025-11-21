let product = "  wireless headphones PRO  ";

// Step 1: Trim extra spaces
product = product.trim();   // "wireless headphones PRO"

// Step 2: Convert to lowercase
product = product.toLowerCase(); // "wireless headphones pro"

// Step 3: Capitalize first letter of each word
product = product
  .split(" ")                             // ["wireless","headphones","pro"]
  .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
  .join(" ");                             // "Wireless Headphones Pro"

// Step 4: Replace "Pro" with "Pro Edition"
product = product.replace("Pro", "Pro Edition");

// Step 5: Display cleaned title and its length
console.log("Cleaned Title:", product);
console.log("Title Length:", product.length);
