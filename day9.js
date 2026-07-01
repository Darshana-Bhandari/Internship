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
console.log(fruits)9;


// for each loop method
fruits.forEach(function(fruits,index){
    console.log("the fruit is"+fruits+)
})

// map() Array Method
// map() loops through each element of an array and returns a new array
// without modifying the original array

let fruits = ["Apple", "Mango", "Grapes"];

let upper = fruits.map(function (fruit) {
    console.log("The fruit is: " + fruit);

    // Convert each fruit name to uppercase
    return fruit.toUpperCase();
});

// Display the new array with all elements in uppercase
console.log(upper);

// filter() Array Method
// filter() returns a new array containing only the elements
// that satisfy the given condition

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter(function (num) {
    // Keep only numbers that are divisible by 2
    return num % 2 === 0;
});

// Display the new array containing only even numbers
console.log(evenNumbers);

// Original array remains unchanged
console.log(numbers);

