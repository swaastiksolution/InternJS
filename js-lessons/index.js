// JS basics
let name = "Alice";    // Block-scoped (modern), can be changed
const age = 30;        // Constant (cannot be changed)
var city = "Paris";    // Function-scoped (older) - not used today


//JavaScript Data Types

// JavaScript has two main categories:
// Primitive Types(Immutable)

// These hold simple values.
// Type	         Example
// String	    "Hello"
// Number	    42, 3.14
// Boolean	    true, false
// Undefined	let x; (not assigned)
// Null	        let y = null;
// Symbol	    Symbol("id")
// BigInt	    123n

// use the "typeof" operator to kow the type of variable
console.log(typeof (12))  // will print number
console.log(typeof ("hello"))  // will print string
console.log(typeof (() => { }))  // will print function
console.log(typeof ({}))  // will print object

// Non-Primitive (Reference) Types
// Type	Example
// Object	{ name: "John", age: 30 }
// Array	[1, 2, 3]
// Function	function() { ... }

// types of function decalaration in JS
//2.1 Function Declaration (Named Function)
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Alice")); // Hello, Alice


//2.2 Function Expression (Anonymous or Named)
const greetNamed = function (name) {
    return "Hello, " + name;
};

console.log(greet("Alex")); // Hello, Alice

//2.3 Arrow Function 
const greetArrow = (name) => {
    return "Hello, " + name;
};

console.log(greetArrow("Alice")); // Hello, Alice


//Loops in JS
// 1. FOR LOOP
for (let i = 0; i < 5; i++) {
    console.log("For Loop:", i);
}

// 2. WHILE LOOP
let j = 0;
while (j < 5) {
    console.log("While Loop:", j);
    j++;
}

//  3. DO-WHILE LOOP
let k = 0;
do {
    console.log("Do-While Loop:", k);
    k++;
} while (k < 5);

// 4. FOR...OF LOOP (works with iterables like arrays)
const colors = ["red", "green", "blue"];

for (const color of colors) {
    console.log("For...of Loop:", color);
}

//  5. FOR...IN LOOP (works with object keys)
const person = { name: "Alice", age: 25, city: "Paris" };
for (const key in person) {
    console.log("For...in Loop:", key, "=>", person[key]);
}

// 6. ARRAY.forEach (array method – not technically a loop keyword)
const nums = [1, 2, 3, 4];
nums.forEach(function (num, index) {
    console.log("forEach:", index, num);
});

// 7. MAP (returns new array – also not a loop keyword but useful)
const squared = nums.map(n => n * n);
console.log("Map result:", squared);







