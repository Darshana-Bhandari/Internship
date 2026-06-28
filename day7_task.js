let marks = Number(prompt("Enter your marks"));

switch (true) {
  case marks >= 90:
    console.log("Grade A+");
    break;

  case marks >= 80:
    console.log("Grade A");
    break;

  case marks >= 70:
    console.log("Grade B");
    break;

  case marks >= 60:
    console.log("Grade C");
    break;

  case marks >= 50:
    console.log("Grade D");
    break;

  default:
    console.log("Grade F");
}