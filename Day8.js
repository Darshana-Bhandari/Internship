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