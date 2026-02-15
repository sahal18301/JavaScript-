// JSON text
var studentJSON = `{
  "name": "Yahya",
  "age": 20,
  "country": "Kenya",
  "courses": ["HTML", "CSS", "JavaScript"],
  "isStudent": true
}`;

// Convert JSON to JavaScript object
var student = JSON.parse(studentJSON);

// Display data
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Country:", student.country);
console.log("First Course:", student.courses[0]);
console.log("Is Student:", student.isStudent);
