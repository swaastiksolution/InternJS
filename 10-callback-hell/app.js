// Callback Hell

// IN SEQUENCE !!!!



setTimeout(() => {
  console.log("heloo!!!")
  setTimeout(() => {
    console.log("helo1")
    setTimeout(() => {
      console.log("heloo4")
    }, 3000)
  }, 2000)``
}, 1000)



setInterval(() => {
  console.log("hello");
}, 800)

