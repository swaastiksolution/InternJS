function makeUppercase(value) {
  console.log(value.toUpperCase())
}
// makeUppercase('peter')

function reverseString(value) {
  console.log(value.split('').reverse().join(''))
}

function myfun(value, cb){
  cb(value)
}

// when passing a callbackFn its not invoked
// makeUpperCase() -> invokes the function 

myfun("hello world",makeUppercase)
myfun("hello world",reverseString)


