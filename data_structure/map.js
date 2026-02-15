// Create Map with data
var employees = new Map([
  [1001, "Yahya"],
  [1002, "Ahmed"],
  [1003, "Fatima"],
  [1004, "Ali"],
]);

// Display full Map
console.log("Employees:");
console.log(employees);

// Get employee name using ID
console.log("Employee 1002:", employees.get(1002));

// Check if ID exists
console.log("Has ID 1003:", employees.has(1003));

// Add new employee
employees.set(1005, "Hassan");

// Remove employee
employees.delete(1004);

// Loop through all employees
console.log("Employee List:");
employees.forEach(function (name, id) {
  console.log(id + " → " + name);
});

// Total employees
console.log("Total Employees:", employees.size);
