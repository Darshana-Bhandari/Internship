// OBJEct
// Vegetable

let vegetable = {
    name: "Carrot",
    color: "Orange",
    season: "all season"
};

console.log(vegetable);

console.log(vegetable.name);
console.log(vegetable.color);
console.log(vegetable.Season);

// OBJECT
// Fruits

let fruit = {
    name: "Mango",
    color: "Yellow",
    taste: "Sweet"
};

console.log(fruit);

console.log(fruit.name);
console.log(fruit.color);
console.log(fruit.taste);

fruit.color = "Green";

fruit.price = 120;

console.log(fruit);


// Object

let employee = {
    id: 101,
    name: "Darshana",
    department: "IT",
    salary: 50000
};

// Display original object
console.log("Original Object:");
console.log(employee);

// Add new property
employee.address = "Kathmandu";

console.log("After Adding Address:");
console.log(employee);

// Update salary
employee.salary = 60000;

console.log("After Updating Salary:");
console.log(employee);

// Delete department property
delete employee.department;

console.log("After Deleting Department:");
console.log(employee);



