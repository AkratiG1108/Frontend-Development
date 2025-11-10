// 7. The Restaurant Billing with Tips
// ------------------------------------
// This program calculates the final restaurant bill with
// GST, service tax (if dining in), and tip recommendations.

// Step 1: Input details
let baseCost = 2500;     // Base food cost in ₹
let diningIn = true;     // true for dine-in, false for takeaway

// Step 2: Calculate GST (5% of base cost)
let gst = baseCost * 0.05;

// Step 3: Calculate service tax (10% if dining in)
let serviceTax = diningIn ? baseCost * 0.10 : 0;

// Step 4: Calculate subtotal (base + taxes)
let subtotal = baseCost + gst + serviceTax;

// Step 5: Add recommended tip (8%) if total > ₹2000
let tip = 0;
if (subtotal > 2000) {
  tip = subtotal * 0.08;
}

// Step 6: Calculate final total
let finalTotal = subtotal + tip;

// Step 7: Round the final total to two decimals
finalTotal = finalTotal.toFixed(2);

// Step 8: Display full bill summary in console
console.log("🍽️ RESTAURANT BILL SUMMARY 🍽️");
console.log("----------------------------------");
console.log("Base Food Cost: ₹" + baseCost);
console.log("GST (5%): ₹" + gst.toFixed(2));
console.log("Service Tax (10% if dine-in): ₹" + serviceTax.toFixed(2));
console.log("Subtotal (Before Tip): ₹" + subtotal.toFixed(2));
console.log("Recommended Tip (8% if bill > ₹2000): ₹" + tip.toFixed(2));
console.log("----------------------------------");
console.log("Final Total: ₹" + finalTotal);

