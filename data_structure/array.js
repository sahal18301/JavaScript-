// Create Array with full data
var shoppingList = ["Milk", "Bread", "Eggs", "Rice"];

// Display entire array
console.log("Shopping List:");
console.log(shoppingList);

// Add new item (to end)
shoppingList.push("Sugar");

// Add item to beginning
shoppingList.unshift("Water");

// Remove last item
shoppingList.pop();

// Remove first item
shoppingList.shift();

// Check if item exists
console.log("Has Eggs:", shoppingList.includes("Eggs"));
console.log("Has Meat:", shoppingList.includes("Meat"));

// Count total items
console.log("Total Items:", shoppingList.length);

// Loop through all items
console.log("Final Shopping List:");
shoppingList.forEach(function (item) {
  console.log(item);
});
