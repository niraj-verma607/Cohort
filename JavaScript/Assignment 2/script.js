// 1. Basic Operators (Arithmetic, Assignment, Increment, Decrement,
// Comparison, Logical, Bitwise)

// a. Create two numbers a = 10 and b = 3.
// Perform and log: a + b, a - b, a * b, a / b, a % b.

let a = 10;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a % b);

// b. Write: let x = 5; x = x + 3;
// Now rewrite the same using +=.
// Do the same for -=, *=, /=.

let x = 5;
x = x + 3;
x += 3;

x = x - 3;
x -= 3;
x = x * 3;
x *= 3;
x = x % 3;
x %= 3;

// c. let count = 5;
// Use count++ and log value before and after.
// Repeat for count–

let count = 5;
console.log(count);

count = count++;
console.log(count);

count = count--;
console.log(count);

// d. Compare two values: 5 == “5” and 5 === “5”.
// Observe difference.

console.log(5 == "5"); //true because of not strict checking
console.log(5 === "5"); // flase because of strict checking

// e. Check if 10 is greater than 5, less than 20, and equal to 10.

console.log(10 > 5); //true
console.log(10 < 20); //true
console.log(10 == 10); //true

// f. Try logical AND and OR:
// true && false
// true || false
// !(true)

console.log(true && true); // true because  both are true
console.log(true || false); // true because one is true
console.log(!true); // false because NOT(opposite) of true is false

// g. Predict the result of:
// (5 > 3 && 10 > 8),
// (5 > 3 || 10 < 8)

console.log(5 > 3 && 10 > 8); //true because both condition are true
console.log(5 > 3 || 10 < 8); //true beacuse one condition is true

// h. Bitwise (light intro):
// Evaluate 5 & 1 and 5 | 1.
// Write result and your observation (no deep explanation needed now).

console.log(5 & 1);
console.log(5 | 1);

// 2. Variable Hoisting in JavaScript

// a. Predict output of:
console.log(c); //undefined beacuse of hoisting and var supports hoisting
var c = 10;

// b. Predict output of:
// console.log(d); //Error because let do not support hoisting
let d = 10;

// c. Predict output of:
test(); //print hello
function test() {
  console.log("Hello");
}

// d. Try writing a function expression before initialization and call it:
// hello();
var hello = function () {
  console.log("Hi");
};
// Write what happened and why.

// 3. Conditional Operators (if, else, else-if, ternary, switch)

// a. Take input using prompt for age.
// If age > 18 → log “Adult”.
// Else → log “Minor”.

let age = 15;
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// b. Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade”
// Else if marks >= 50 → “C grade”
// Else → “Fail”

let marks = 95;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// c. Create a variable city = “Bhopal”.
// If city is “Bhopal” → log “MP”
// Else if city is “Delhi” → log “Capital”
// Else → log “Unknown City”

let city = "Bhopal";
if (city === "Bhopal") {
  console.log("MP");
} else if (city === "Delhi") {
  console.log("Delhi");
} else {
  console.log("Unknown City");
}

// d. Use ternary operator:
// Let score = 40.
// If score > 35 → “Pass” else “Fail” using a ternary.

let score = 0;
score > 35 ? console.log("Pass") : console.log("Fail");

// e. Convert this if-else into a ternary:
// if (temperature > 30) { “Hot” } else { “Pleasant” }

let temperature = 50;

temperature > 30 ? console.log("HOT") : console.log("Pleasent");

// f. Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”.

let Day = 4;

switch (Day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thrusday");
    break;

  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day");
}

// g. Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”
// Else → “Not Eligible”

let ages = 20;
let country = "India";

if (ages > 18 && country === "India") {
  console.log("Eligible for vote");
} else {
  console.log("Not Eligible");
}
