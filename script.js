// Importing named functions from another JavaScript file.
// The names inside {} must exactly match the exported function names.

import { add, sub } from "./day13.js";

// Calling the imported add() function.
const result1 = add(10, 5);

// Calling the imported sub() function.
const result2 = sub(10, 5);

// Displaying the results in the console.
console.log(result1); // Output: 15
console.log(result2); // Output: 5


// Explanation:
// add(10, 5) returns 15.
// sub(10, 5) returns 5.

// Note:
// - Named imports use curly braces {}.
// - The imported names must match the exported names.
// - If the export is `sub`, you must import `sub`.
//   Importing `subtract` will cause an error unless it is exported with that name.