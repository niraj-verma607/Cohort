"use strict";
// const a = "World";
// const b = "5";
// console.log(a + b);
/**
 * String, number, boolean, array, tuple, void never
 */
// const a : number = 123
// console.log(a)
// Array : FFixed type but not the length
const a = [1, 2];
a.push(20);
// console.log(a)
// Tuple : Fixed Size and type
const tuple = [1, 2, 3];
// console.log(tuple)
// Void
// Void : returns nothing
function greet(name) {
    console.log(name);
}
// greet("Niraj")
function greet2(name) {
    return "Hello" + name;
}
// Never : When function never ends never(like infinite loop)
function error(error) {
    throw new Error("Something went wrong");
}
const user = {
    name: "Niraj",
    age: 22,
    isMale: true,
};
function greet3(data) {
    console.log("Hello " + data.name + " your age is " + data.age);
}
// greet3(user);
/**
 * any -> any of all datatypes
 * unknown
 */
// let ab: any;
// ab = 123;
// console.log(ab.toUpperCase());
let abc;
abc = "Niraj";
if (typeof abc === "string")
    console.log(abc.toUpperCase());
