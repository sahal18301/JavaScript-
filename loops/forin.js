let person = {
    name: "john",
    age: 30,
    city: "new york"
}

for (const key in person) {
   console.log("the key is " + key + " and the value is " +person[key])
    
}