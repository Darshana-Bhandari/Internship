// Task
// filter() Array Method
// filter() returns a new array containing only the elements
// that satisfy the given condition

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumbers = numbers.filter(function (num) {
    // Keep only odd numbers
    return num % 2 !== 0;
});

// Display the new array containing only odd numbers
console.log(oddNumbers);