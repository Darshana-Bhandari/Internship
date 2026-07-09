// arrow Function
// it is a shorter method to write a function in javascript. it is introduction in ES6 module

const hello=()=>{
    console.log("DarsuParsu")
};
hello()

//
const sum=(a,b)=>{
    return a+b;
}
console.log(sum(10,12))

// teplate literals
// it is a string enclosed in backtisks(`) and it can contain placeholders for variables or expressions, which are indicated by the ${} syntax.

let name="Darshana"
let surname="Bhandari"
console.log("name"+name)
console.log(`name is ${name} ${surname}`)

// why use multiple template literals
// -cleaner code
// -easier string formatting
// -multiple string supports


// import and export
// export allows us to share variable, Function or classes from ine javascripts file to another
// import allows us to use the exported variable, function or class in another javascript file
// default and named export

// Name export
export function add(a,b){
    return a+b;
}

export function sub(a,b){
    return a-b;
}

