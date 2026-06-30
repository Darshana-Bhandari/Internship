// while loop

// while loop execute garnu vanda pahila nei yele codition check garxa

while(Condition){
    //
console.log("execute garxa run garxa code lei");
}

// example of the while loop 

let count=11;
while(count<=10){
    console.log("Number are"+count);
    count ++
}


// do while loop

// first time yelei code lei exceute garxa anu matara yele condition check garxa
let count= 12
do{
    console.log("the number are" + count)
    count--;
}while(count>=10)


    //function

// function auta resuable code of the block ho jun kuneri specific task perform garna lai use garxum

function sum(a,b){
    return a+b
}

let result=sum(10,15)
let result1=sum(20,40)
console.log(result);
console.log(result);

// Function to check grade based on marks

function gradeCheck(marks) {
    if (marks >= 90 && marks <= 100) {
        console.log("Grade: A+");
    } 
    else if (marks >= 80) {
        console.log("Grade: A");
    } 
    else if (marks >= 70) {
        console.log("Grade: B");
    } 
    else if (marks >= 60) {
        console.log("Grade: C");
    } 
    else if (marks >= 50) {
        console.log("Grade: D");
    } 
    else if (marks >= 0) {
        console.log("Grade: F");
    } 
    else {
        console.log("Invalid Marks");
    }
}

// Function Call
gradeCheck(95); // A+
gradeCheck(82); // A
gradeCheck(75); // B
gradeCheck(65); // C
gradeCheck(55); // D
gradeCheck(40); // F

// function with expression
const sayhello= function(){
    console.log("hello function with argument")
}





