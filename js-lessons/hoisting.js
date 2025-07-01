// hoisting -> refers to thing where functions and variables are moved to the top of their scope before execution

// FUNCTION HOISTING

greet("Alex") // function called before its defined

function greet(name) {
    const greeting = `Hi!! ${name}`;
    console.log(greeting)
} // due to hoisting the function definition is moved to top before its execution


// VARIABLE HOISTING 
// only variables declared with 'var' are hoisted like the function, let & const are hoisted
// this can lead to erratic behaviour like 

console.log(x)  // gives the undefined error
var x = 5

/* what the JIT compiler sees after hoisting
 *  var x;
 *  console.log(x)
 *  x = 5;
*/
