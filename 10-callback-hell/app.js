// Callback Hell

// IN SEQUENCE !!!!



// setTimeout(() => {
//   console.log("heloo!!!")
//   setTimeout(() => {
//     console.log("helo1")
//     setTimeout(() => {
//       console.log("heloo4")
//     }, 3000)
//   }, 2000)
// }, 1000)



// setInterval(() => {
//   console.log("hello");
// }, 800)

// setTimeout(()=>{
//   console.log("helo")
// },2000)



// Synchronous (Blocking)
function blockingTask() {
  const start = Date.now();
  while (Date.now() - start < 3000) {
    // Simulates a long-running task (3 seconds)
  }
  console.log("Finished blocking task");
}

// console.log("Start");
// blockingTask(); // Blocks here for 3 seconds
// console.log("End");

//  Asynchronus (Non-Blocking)
function nonBlockingTask() {
  setTimeout(() => {
    console.log("Finished non-blocking task");
  }, 3000); // 3-second delay
}

console.log("Start");
nonBlockingTask(); // Runs in background
console.log("End");
