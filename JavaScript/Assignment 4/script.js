// LEVEL 1

// 1. Write a function sayHello() that prints "Hello JavaScript".
function sayHello() {
  console.log("Hello");
}
sayHello();

// 2. Create a function add(a, b) that returns their sum and log the result.

function add(a, b) {
  return a + b;
}
console.log(add(12, 3));

// 3. Write a function with a default parameter name = "Guest" that prints "Hi <name>".

function defaultPara(name = "Guest") {
  console.log(`Hi ${name}`);
}
defaultPara("Niraj");

// 4. Use rest parameters to make a function that adds unlimited numbers.

function addUnlimited(...nums) {
  let sum = 0;
  //   nums.forEach((val) => {
  //     sum = sum + val;
  //     console.log(sum);
  //   });

  //   for (let i = 0; i < nums.length; i++) {
  //     sum = sum + nums[i];
  //   }
  //   console.log(sum);

  let ans = nums.reduce(function (acc, val) {
    return acc + val;
  }, 0);

  console.log(ans);
}
+addUnlimited(20, 10, 60, 50, 60);

// 5. Create an IIFE that prints "I run instantly!".
(function () {
  console.log("I run instantly");
})();

// 6. Make a nested function where the inner one prints a variable from the outer one.

function parent() {
  let a = 10;
  function child() {
    console.log(a);
  }
  child();
}

parent();

// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.

let fruits = ["apple", "orange", "guava", "grapes", "mango"];
fruits.push("banana");
console.log(fruits);
fruits.shift();
console.log(fruits);

// 8. Use a for loop to print all elements of an array.

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for (const ele of arr) {
//     console.log(ele)
// }

// 9. Create an object person with keys name, age, and city, and print each key’s value.

let obj = {
  name: "Niraj",
  age: 20,
  city: "Giridih",
};
// console.log(obj.name);
// console.log(obj["age"]);
// console.log(obj.city);

for (const ele in obj) {
  console.log(obj[ele]);
}

// 10. Use setTimeout() to log "Time’s up!" after 2 seconds.

setTimeout(() => {
  console.log("Time's up!");
}, 2000);

//LEVEL 2

// 1. Write a higher-order function runTwice(fn) that takes another function and executes it two times.

function runTwice(fn) {
  fn();
  fn();
}

runTwice(function () {
  console.log("Hello");
});

// 2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.

function pure(a, b) {
  console.log(a + b);
}

let global = 0;

function impure(a) {
  global++;
  console.log(a + global);
}

pure(1, 2);
pure(1, 2);

impure(2);
impure(2);

// 3. Write a function that uses object destructuring inside parameters to extract and print name and age.

function object({ name, age }) {
  console.log(name, age);
}

object({ name: "Niraj", age: 20 });

// 4. Demonstrate the difference between normal function and arrow function when used as object methods (the this issue).

let obj1 = {
  name: "Niraj",
  fnc: function () {
    console.log(this);
  },
  fnc2: () => {
    console.log(this);
  },
};

obj1.fnc(); //Object
obj1.fnc2(); //arrow fnc this ka value parent se leta hai (obj1 global space me hai aur global space me this ka value window hota hai isliye this ka value window hoga)

// 5. Given an array of numbers, use map() to create a new array where each number is squared.

let arr1 = [1, 2, 3, 4, 5];

let newArr = arr1.map((val) => {
  return val * val;
});

console.log(newArr);

// 6. Use filter() to get only even numbers from an array.

let arr2 = [12, 23, 32, 44, 81];
let newArr2 = arr2.filter((val) => {
  return val % 2 === 0;
});

console.log(newArr2);

// 7. Use reduce() to find the total salary from an array of numbers [1000, 2000, 3000].

let salary = [1000, 2000, 3000];

let ans = salary.reduce((acc, val) => {
  return acc + val;
}, 0);

console.log(ans);

// 8. Create an array of names and use some() and every() to test a condition (e.g., all names longer than 3 chars).

let names = ["Niraj", "Sachin", "Harsh", "Nitish", "Anil"];

let ans2 = names.some((val) => {
  return val.length > 3;
});

console.log(ans2);

let ans3 = names.every((val) => {
  return val.length > 5;
});

console.log(ans3);

// 9. Create an object user and test the behavior of Object.freeze() and Object.seal() by adding/changing keys.

let user = {
  name: "niraj",
  age: 20,
  email: "email@rmail.com",
};

Object.freeze(user);

//Freeze karne se object ka value chnage nhi kar sakate hai

Object.seal(user);

//Seal se hum value chnage kar sakte hai par new propety add nahi kar skte hai

// 10. Create a nested object (user → address → city) and access the city name inside it.

let userObj = {
  user: {
    name: "niraj",
    age: 20,
    address: {
      city: "Giridih",
      state: "Jharkhand",
    },
  },
};

// console.log(userObj.user.address.city)

let { city } = userObj.user.address;
console.log(city);
