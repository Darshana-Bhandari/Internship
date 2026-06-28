// switch condition statement

let day= Number(prompt("enter your day"));
switch(day){
    case 1:
        console.log("today is sunday")
        break;
        case 2:
            console.log("today is monday")
            break;
            case 3:
                console.log("today is Tuesday")
                break;
                case 4:
                    console.log("today is wednesday")
                    break;
                    default:
                        console.log("Invalide day")        
}


let choice = Number(
  prompt(
    "Enter operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Modulus"
  )
);

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));

switch (choice) {
  case 1:
    console.log("Addition: " + (num1 + num2));
    break;

  case 2:
    console.log("Subtraction: " + (num1 - num2));
    break;

  case 3:
    console.log("Multiplication: " + (num1 * num2));
    break;

  case 4:
    console.log("Division: " + (num1 / num2));
    break;

  case 5:
    console.log("Modulus: " + (num1 % num2));
    break;

  default:
    console.log("Invalid operation");
}