
// SYNCHRONOUS JAVASCRIPT
// Code executes line by line

console.log("Start of the program");
console.log("This is synchronous code");
console.log("End of the program");



// Problem with Synchronous Code
// Sometimes tasks (API calls, database requests, file loading)
// take time, which can block execution.
// To solve this, JavaScript uses asynchronous programming.



// Sample Data
const data = [
    {
        name: "Darshana",
        role: "Frontend Developer",
        age: 19,
        address: "Belbari-3, Morang"
    },
    {
        name: "Darsu",
        role: "Backend Developer",
        age: 20,
        address: "Belbari-3, Morang"
    }
];


// ===============================
// ASYNCHRONOUS FUNCTION
// Simulates fetching data from a server
// using setTimeout()
// ===============================

function getData() {
    setTimeout(() => {
        console.log("Fetching data...\n");

        data.forEach((person, index) => {
            console.log(
                `${index + 1}. Name: ${person.name}
Role: ${person.role}
Age: ${person.age}
Address: ${person.address}
------------------------`
            );
        });
    }, 1000); // Executes after 1 second
}


// Function Call
getData();

console.log("This line executes before data is displayed.");