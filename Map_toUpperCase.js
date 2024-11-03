//Convert to Uppercase:
//Given an array of lowercase strings,
//use map to convert each string to uppercase.

// Input: ["hello", "world"]
let array = ["hello", "world"];

let output = array.map(toUppercase);

function toUppercase(i) {
  return i.toUpperCase();
}
console.log(output);
//Alternative Method:
let arr = ["hello", "world"];

let result = arr.map((i) => i.toUpperCase());
console.log(result);
