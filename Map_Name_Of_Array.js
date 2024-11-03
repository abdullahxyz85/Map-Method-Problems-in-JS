// Extract Names:
//Given an array of objects representing people with name and age properties,
//use map to create an array of just their names.

// Input: [{name: "Ali", age: 20}, {name: "Sara", age: 22}]
let arr = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 22 },
];

let result = arr.map(printName);

function printName(arr) {
  return arr.name;
}
console.log(result);

//Alternative Method:
let array = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 22 },
];

let output = array.map((array) => array.name);
console.log(output);
