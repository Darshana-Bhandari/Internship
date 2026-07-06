
// SYNCHRONOUS JAVASCRIPT
// Code executes line by line

console.log("Start of the program");
console.log("This is synchronous code");
console.log("End of the program");


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


// ASYNCHRONOUS FUNCTION
// Simulates fetching data from a server


function getData() {
    setTimeout(() => {
        console.log("\nFetching data...\n");

        data.forEach((person, index) => {
            console.log(
                `${index + 1}. Name: ${person.name}
Role: ${person.role}
Age: ${person.age}
Address: ${person.address}
------------------------`
            );
        });
    }, 1000);
}

getData();

console.log("This line executes before data is displayed.");

// PROMISES IN JAVASCRIPT
// A Promise represents the eventual
// completion or failure of an async task.
// States:
// 1. Pending
// 2. Fulfilled (Resolved)
// 3. Rejected


const loginPromise = new Promise((resolve, reject) => {
    let isLoggedIn = true;

    if (isLoggedIn) {
        resolve("Login successful");
    } else {
        reject("Login failed");
    }
});


// Handling the Promise

loginPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


// ASYNC / AWAIT IN JAVASCRIPT


// async:
// Used to declare a function that returns a Promise.

// await:
// Pauses the execution of an async function
// until the Promise is resolved or rejected.

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 6000); // Wait for 6 seconds
    });
}

async function displayData() {
    const result = await fetchData();
    console.log(result);
}

displayData();