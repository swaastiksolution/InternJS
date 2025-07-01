function login(username, password) {
  return new Promise((resolve, reject) => {
    const storedUsername = "admin";
    const storedPassword = "1234";

    if (username === storedUsername && password === storedPassword) {
      resolve(`Welcome, ${username} 👋`);
    } else {
      reject("Invalid credentials ❌");
    }
  });
}

// Usage
login("admin", "1234")
  .then(msg => console.log(msg))
  .catch(err => console.error(err));

login("user", "wrongpass")
  .then(msg => console.log(msg))
  .catch(err => console.error(err));



// A simulated server request
// function simulateRequest(success) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         resolve("Request successful 🚀");
//       } else {
//         reject("Server error 💥");
//       }
//     }, 1000);
//   });
// }

// // Usage
// simulateRequest(true)
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// simulateRequest(false)
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
