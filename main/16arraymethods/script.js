/*push()	Adds to the end
pop()	Removes from the end
unshift()	Adds to the beginning
shift()	Removes from the beginning*/




let shoppingList = ["Milk", "Bread", "Eggs"];

// Add an item
shoppingList.push("Rice");

// Add an item at the beginning
shoppingList.unshift("Butter");

// Remove the last item
shoppingList.pop();

// Check whether an item exists
console.log(shoppingList.includes("Milk"));

// Find the position of an item
console.log(shoppingList.indexOf("Bread"));

// Convert array into a string
console.log(shoppingList.join(", "));

// Display final list
console.log(shoppingList);