// Calculate Lengths:
// Given an array of strings,
//use map to return an array containing the length of each string.

// Input: ["apple", "banana", "cherry"]
let array = ["apple", "banana", "cherry"];

let output = array.map(calculateLength);

function calculateLength(i) {
  return i.length;
}
console.log(output);

//Alternative Method:
let arr = ["apple", "banana", "cherry"];

let result = arr.map((i) => i.length);
console.log(result);
