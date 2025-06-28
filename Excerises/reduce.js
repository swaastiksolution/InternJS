// Q1. use reduce() method and to group array of objects by specific property
const items = [
  { name: "Apple", category: "fruit" },
  { name: "Carrot", category: "vegetable" },
  { name: "Banana", category: "fruit" },
  { name: "Broccoli", category: "vegetable" },
];
// output
// {
//   fruit: ["Apple", "Banana"],
//   vegetable: ["Carrot", "Broccoli"]
// }

//Q2. Count how many times each element occurs in an array.
//const colors = ["red", "blue", "red", "green", "blue", "blue"];

//output
// { red: 2, blue: 3, green: 1 }

const nums  = [1,2,3,4,5,6,7,8,9];


const sqedNums = nums.map((value,idx)=>{
  console.log(value);
  return value*value;
});
console.log(sqedNums);