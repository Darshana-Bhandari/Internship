// WHILE LOOP

let count = 1;

while (count <= 10) {
    console.log("Number:", count);
    count++;
}


// DO WHILE LOOP

let number = 12;

do {
    console.log("The number is:", number);
    number--;
} while (number >= 10);


// FUNCTION

function sum(a, b) {
    return a + b;
}

let result1 = sum(10, 15);
let result2 = sum(20, 40);

console.log("Result 1:", result1);
console.log("Result 2:", result2);


// GRADE CHECKING FUNCTION

function gradeCheck(marks) {
    if (marks >= 90 && marks <= 100) {
        console.log("Grade: A+");
    } else if (marks >= 80) {
        console.log("Grade: A");
    } else if (marks >= 70) {
        console.log("Grade: B");
    } else if (marks >= 60) {
        console.log("Grade: C");
    } else if (marks >= 50) {
        console.log("Grade: D");
    } else if (marks >= 0) {
        console.log("Grade: F");
    } else {
        console.log("Invalid Marks");
    }
}

gradeCheck(95);
gradeCheck(82);
gradeCheck(75);
gradeCheck(65);
gradeCheck(55);
gradeCheck(40);


// FUNCTION EXPRESSION

const sayHello = function () {
    console.log("Hello! This is a function expression.");
};

sayHello();


// SCOPE
// Scope determines where a variable can be accessed.
// Global Scope

let name = "Darshana";

function myName() {
    console.log(name);
}

myName();
console.log(name);


// Local Scope

function myName1() {
    let name1 = "Darshana";
    console.log(name1);
}

myName1();
// console.log(name1); // Error: name1 is not defined



// OBJECT

// An object stores related data in key-value pairs.

let student = {
    name: "Darshana",
    age: 19,
    faculty: "BIT",
    college: "Itahari International College"
};

// Display the entire object
console.log(student);

// Access object properties
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Faculty:", student.faculty);
console.log("College:", student.college);

// Update a property
student.age = 20;

// Add a new property
student.address = "Itahari";

// Display updated object
console.log(student);


// Array
// array vaneko multiple value single variable ma store garna use garinxa

let fruits=["Apple", "Mango", "Orange", "Banana", "Graps"] //[0,1,2,3]
console.log(fruits[0])
