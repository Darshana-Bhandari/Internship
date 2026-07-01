// Array
// Arrays are used to store multiple values in a single variable

let fruits = ["Apple", "Mango", "Grapes"];


// includes()
// Checks whether a specific element exists in the array
console.log(fruits.includes("Basketball")); // false
console.log(fruits.includes("Apple")); // true


// indexOf()
// Returns the position (index) of an element in the array
// If the element is not found, it returns -1
console.log(fruits.indexOf("Apple")); // 0
console.log(fruits.indexOf("Mango")); // 1


// sort()
// Arranges array elements in alphabetical order
fruits.sort();
console.log(fruits);


// reverse()
// Reverses the order of elements in the array
fruits.reverse();
console.log(fruits);


// splice()
// Used to remove, replace, or add elements in an array
// splice(startIndex, deleteCount)
fruits.splice(1, 2); // Removes 2 elements starting from index 1
console.log(fruits);


// Adding elements using splice()
// splice(startIndex, deleteCount, newElement1, newElement2)
fruits.splice(1, 0, "Banana", "Orange");
console.log(fruits);