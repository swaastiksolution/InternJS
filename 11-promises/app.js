//  Promises

// async await
// consume/use promises

// Pending, Rejected, FulFilled

// const value = 2;
// const promise = new Promise((resolve, reject) => {
//   const random = Math.floor(Math.random() * 3)
//   console.log(random)
//   if (random === value) {
//     resolve('you guessed correctly')
//   } else {
//     reject('wrong number')
//   }
// })

// console.log(promise)

// promise.then((data) => console.log(data)).catch((err) => console.log(err))


// // simulating a cross site request 

const promise =  new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false;

      if (success) {
        resolve("Data loaded successfully!");
      } else {
        reject("Failed to load data.");
      }
    }, 2000); // simulates 2 second delay
  });


console.log("Start");

console.log(promise);

promise
  .then(result => {
    console.log("Result:", result); // If resolved
  })
  .catch(error => {
    console.error("Error:", error); // If rejected
  });

console.log("End");
