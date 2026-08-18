// let a: number = 10;
// console.log(a);

// Type inference and Annotation
let a = "dev";
// console.log(a);

// inference => typescript khud se type de deta hai
// Annotation => hame khud swe type define karna padta h

// Primitive Type(Data types)
// 1. String
// 2. Boolean
// 3.Numver
// 4. null
// 5.undefined
// 6.symbol

let arr: number[] = [10, 20, 30];
arr.push(15);
// console.log(arr);

// Tuples => define number of element with types

let tuples: [number, string, number, boolean] = [10, "20", 20, true];
// console.log(tuples);

// Enum =>
enum Role {
  ADMIN,
  USER,
  SUP_ADMIN,
}

let user = Role.ADMIN; //return index
// console.log(user);

// Any vs Unknown vs Never

// Any => Accepts any types

let b: any = "10";
b = 50;
b = true;
console.log(b);

// Unknown => Accepts any types that we gives
let c: unknown = "10";
c = 50;

console.log(typeof c);

// Union Types => Accepts many types

let union: string | number | boolean = true;
union = "Niraj";

console.log(union);
