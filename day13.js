
// Arrow Functions

// Arrow Function
// It is a shorter syntax for writing functions in JavaScript.
// Arrow functions were introduced in ES6 (ECMAScript 2015).

const hello = () => {
    console.log("DarsuParsu");
};
hello();

// Arrow Function with Parameters
const sum = (a, b) => {
    return a + b;
};
console.log(sum(10, 12));

// Note:
// If the function contains only one return statement,
// we can write it in a shorter form.

// Example:
// const sum = (a, b) => a + b;


// Template Literals

// Template Literals are strings enclosed in backticks (` `).
// They allow us to embed variables or expressions
// using the ${} syntax.

let name = "Darshana";
let surname = "Bhandari";

console.log("name " + name);
console.log(`name is ${name} ${surname}`);


// Why use Template Literals?
// - Cleaner and more readable code
// - Easier string formatting
// - Supports multi-line strings
// - Allows expression interpolation using ${}


// Example:
// let age = 21;
// console.log(`${name} is ${age} years old.`);


// Import and Export

// Export allows us to share variables, functions,
// or classes from one JavaScript file to another.

// Import allows us to use the exported variables,
// functions, or classes in another JavaScript file.

// There are two types of exports:
// 1. Named Export
// 2. Default Export



// Named Export

// Named exports allow multiple values
// to be exported from the same file.

export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

// Example of importing named exports:
//
// import { add, sub } from "./math.js";
//
// console.log(add(10, 5));
// console.log(sub(10, 5));




// Default Export


// A file can have only ONE default export.

// Example:
//
// export default function multiply(a, b) {
//     return a * b;
// }
//
// Import:
// import multiply from "./math.js";
//
// console.log(multiply(5, 4));



// Difference Between Named and Default Export


// Named Export
// - Multiple exports are allowed.
// - Must be imported using the same name inside {}.
//
// Example:
// export function add(){}
// import { add } from "./math.js";


// Default Export
// - Only one default export per file.
// - Imported without {} and can have any name.
//
// Example:
// export default function greet(){}
// import greetUser from "./math.js";