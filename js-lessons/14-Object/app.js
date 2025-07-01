// 3 methods to convert objects into arrays
// Object.keys - returns all the keys of an object as an array
// Object.values() - returns all the property values as an array
// Object.entries() - converts both key value pair and as an individual array eg ['key', 'value]


const person = {
    name: "alex",
    age: 32,
    status: "developer"
}

const keys = Object.keys(person);
console.log(keys);


const values = Object.values(person);
console.log(values);

const entries = Object.entries(person);
console.log(entries);

for(const [key, value] of entries) {
    
}