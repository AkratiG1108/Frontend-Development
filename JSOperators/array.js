// 1. Create an array of 8 random scores between 30 and 100
let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

// 2. Highest and lowest score
let highest = Math.max(...scores);
let lowest = Math.min(...scores);

// 3. Average score using reduce()
let average = scores.reduce((sum, val) => sum + val, 0) / scores.length;

// 4. Count number of students who passed (≥ 50) using filter()
let passedCount = scores.filter(score => score >= 50).length;

// 5. Formatted summary using template literals
let summary = `
Array Performance Analyzer
-------------------------------
Scores: ${scores.join(", ")}

Highest Score : ${highest}
Lowest Score  : ${lowest}
Average Score : ${average.toFixed(2)}
Passed Count  : ${passedCount}
`;

// Display result
console.log(summary);
