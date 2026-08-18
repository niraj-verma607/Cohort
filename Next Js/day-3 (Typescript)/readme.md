# TypeScript

## What is TypeScript?

TypeScript is a **superset of JavaScript** that adds static type checking and other features. Every valid JavaScript code is also valid TypeScript. TypeScript is compiled into plain JavaScript that can run in any browser or Node.js environment.

## Why TypeScript?

1. **Type Safety** - Catch errors at compile-time instead of runtime
2. **Better IDE Support** - Autocomplete, refactoring, and intelligent code navigation
3. **Self-Documenting Code** - Types serve as inline documentation
4. **Catch Bugs Early** - Prevents common mistakes like calling methods that don't exist
5. **Improved Maintainability** - Easier to refactor large codebases with confidence

## Steps to Setup TypeScript

1. **Install TypeScript**

   ```bash
   npm i typescript --save-dev
   ```

2. **Install Node.js Types**

   ```bash
   npm i @types/node --save-dev
   ```

3. **Install ts-node (Optional but recommended)**

   ```bash
   npm i ts-node --save-dev
   ```

   ts-node allows you to run TypeScript files directly without compiling to JavaScript first.

4. **Create TypeScript Configuration File**
   ```bash
   npx tsc -init
   ```
   This creates a `tsconfig.json` file that contains all the configuration options for the TypeScript compiler.

**Now you're ready to run TypeScript!** 🎉

## Examples

### Example 1: Basic Type Annotation

```typescript
// TypeScript
let name: string = "John";
let age: number = 25;
let isActive: boolean = true;

// This will cause an error at compile-time:
// age = "twenty"; // ❌ Error: Type 'string' is not assignable to type 'number'
```

### Example 2: Function Types

```typescript
// Define function parameter and return types
function add(a: number, b: number): number {
  return a + b;
}

add(5, 10); // ✅ Works
add("5", "10"); // ❌ Error: Argument of type 'string' is not assignable to type 'number'
```

### Example 3: Interfaces (Objects)

```typescript
interface User {
  name: string;
  age: number;
  email?: string; // optional property
}

const user: User = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

// This will cause an error:
// const user2: User = { name: "Bob" }; // ❌ Error: Property 'age' is missing
```

### Example 4: Union Types

```typescript
let value: string | number; // can be string OR number

value = "hello"; // ✅ Works
value = 42; // ✅ Works
value = true; // ❌ Error: Type 'boolean' is not assignable
```

### Example 5: Arrays and Generics

```typescript
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];

// Generic function
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement([1, 2, 3]); // ✅ Returns 1 (type: number)
getFirstElement(["a", "b"]); // ✅ Returns "a" (type: string)
```

## Key Differences: JavaScript vs TypeScript

| Feature         | JavaScript | TypeScript            |
| --------------- | ---------- | --------------------- |
| Types           | Dynamic    | Static (compile-time) |
| Error Detection | Runtime    | Compile-time          |
| Compilation     | Not needed | Compiles to JS        |
| IDE Support     | Basic      | Advanced              |
| Learning Curve  | Easier     | Steeper               |

TypeScript is powerful for building large applications while keeping your code maintainable and bug-free!
