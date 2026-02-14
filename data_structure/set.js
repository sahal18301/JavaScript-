// Create Set with full data
var visitors = new Set([
  "Yahya",
  "Ahmed",
  "Fatima",
  "Yahya", // duplicate
  "Ali",
  "Fatima", // duplicate
]);

// Display entire Set
console.log("All Unique Visitors:");
console.log(visitors);

// Add new visitor
visitors.add("Hassan");

// Try adding duplicate visitor
visitors.add("Ahmed");

// Check if visitor exists
console.log("Has Yahya:", visitors.has("Yahya"));
console.log("Has Omar:", visitors.has("Omar"));

// Remove visitor
visitors.delete("Ali");

// Count total visitors
console.log("Total Unique Visitors:", visitors.size);

// Loop through all visitors
console.log("Visitor List:");
visitors.forEach(function (visitor) {
  console.log(visitor);
});
