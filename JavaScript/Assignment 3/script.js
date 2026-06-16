// Level 1 – Pure Beginner Practice
// 1 - print numbers from 1 to 10
//  loop from 1 to 10 and print each numbers .

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2 - print only even numbers from 1 to 20
// use loop and conditions to print even ones .
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// 3 - print numbers from 10 to 1 reverse
// loop with a decrement .

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// 4 - print the word "yes" 5 times repeat using a loop
for (let i = 1; i < 6; i++) {
  console.log("Yes");
}
// 5 - print whether numbers from 1 to 10 are even or odd  for each number check :"even", else -> "odd"

for (let i = 1; i < 11; i++) {
  if (i % 2 == 0) {
    console.log(`${i} : Even`);
  } else {
    console.log(`${i} : Odd`);
  }
}
// 6.ask user for a number and say if its  positive or negative
// use prompt() and a condition

let num = prompt("Enter a number");
// let num = +prompt("Enter a number"); // we can add + before prompt to change strings into numbers
let newNum = Number(num);

if (newNum >= 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

let age = +prompt("Age bataoo");
if (age >= 18) {
  console.log("Vote de jaa ke");
} else {
  console.log("Tu bachha hai abhi");
}

//Validation(Ok, Cancel, Strings)

let age2 = prompt("Age bataoo");
if (age2 == null) {
  console.error("You Press Cancel");
} else {
  if (age2.trim() === "") {
    console.error("Age Daal bhai");
  } else {
    age2 = Number(age2.trim());
    if (isNaN(age2)) {
      console.error("Number dal de bhai");
    } else {
      console.log("Number hai");
    }
  }
}

// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

for (let i = 1; i <= 10; i++) {
  console.log(`${i} X 5 = ${5 * i}`);
}

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.
let count = 0;
for (let i = 1; i <= 15; i++) {
  if (i > 8) {
    count++;
  }
}
console.log(count);

// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

let correctPassword = "niraj";
let userPassword = prompt("Enter your password");

if (correctPassword === userPassword) {
  console.error("Access Granted");
} else {
  console.log("Access Denied");
}

// Level 2 – Slightly Tougher but Logical
// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

let attempt = 0;
let correctPass = "niraj";
let userPass = prompt("Enter your password");
attempt++;

while (attempt < 3 && correctPass !== userPass) {
  userPass = prompt("Enter password again !");
  attempt++;
}
if (attempt === 3 && correctPass !== userPass) {
  console.error("Account Locked");
} else {
  console.log("Done");
}

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".
let word = prompt("Enter any word");
let counter = 0;

while (word !== "stop") {
  if (word === "yes") {
    counter++;
  }
  word = prompt("Enter word again !");
}

console.log(`Total times Yes count : ${counter}`);

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.
for (let i = 1; i < 50; i++) {
  if (i % 7 === 0) {
    console.log(i);
  }
}

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.
let sum = 0;
for (let i = 1; i < 31; i++) {
  if (i % 2 !== 0) {
    sum = sum + i;
  }
}
console.log(sum);

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

let number = prompt("Enter Number");
number = Number(number);

while (number % 2 !== 0) {
  number = prompt("Enter number again !");
  number = Number(number);
}

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

let start = prompt("Enter starting number");
let end = prompt("Enter ending number");

if (start > end) {
  console.error("Start can not be bigger than end");
}

for (let i = start; i <= end; i++) {
  console.log(i);
}

// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.
let Oddcount = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
    Oddcount++;
  }

  if (Oddcount === 3) {
    break;
  }
}

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// let userNumCount = 0;
// let possCount = 0;

// while (userNumCount < 5) {
//   let userNum = +prompt("Enter a number:");
//   userNumCount++;

//   if (userNum > 0) {
//     possCount++;
//   }
// }

// console.log("Total positive numbers:", possCount);

// OR

let counters = 0;
for (let i = 1; i < 6; i++) {
  let number = +prompt("Enter Number");
  if (number >= 0) counters++;
}
console.log("Positive Number : " + counters);

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

let balance = 1000;
let flag = false;
let withdrawCount = 0;

while (balance > 0 && withdrawCount !== 3) {
  let withdraw = +prompt("Enter Number to withdraw money");
  withdrawCount++;

  if (withdraw <= balance) {
    balance -= withdraw;
  } else {
    flag = true;
    break;
  }
}

if (flag === true) {
  console.log("Insufficient Balance");
}

console.log(`Balance : ${balance}`);
