// 1. Object Creation
const person = {
  name: "Alice",
  age: 30,
  isStudent: false
};

// 2. Accessing Properties
console.log("Name:", person.name);         // Dot notation
console.log("Age:", person["age"]);        // Bracket notation

// 3. Adding and Updating Properties
person.city = "Paris";                     // Add new property
person.age = 31;                           // Update existing property
console.log("Updated Age:", person.age);

// 4. Deleting a Property
delete person.isStudent;
console.log("After delete:", person);

// 5. Method Inside Object
const car = {
  brand: "Toyota",
  start: function() {
    return "Car started!";
  }
};
console.log(car.start());

// 6. Shorthand Method Syntax
const bike = {
  brand: "Yamaha",
  ride() {
    return "Bike is moving!";
  }
};
console.log(bike.ride());

// 7. Using 'this' Keyword
const user = {
  name: "John",
  greet() {
    return "Hello, " + this.name;
  }
};
console.log(user.greet());

// 8. Looping Through Object Properties
const profile = {
  username: "admin",
  role: "editor",
  active: true
};

for (const key in profile) {
  console.log("Key:", key, "Value:", profile[key]);
}

//10. Nested Objects
const student = {
  name: "Eva",
  address: {
    city: "London",
    zip: 12345
  }
};
console.log("City:", student.address.city);

// 🔹 11. Object Destructuring
const { name, city } = { name: "Tom", city: "Berlin" };
console.log("Destructured:", name, city);


