//Convert to Boolean:
//Given an array of numbers,
// use map to create a new array where each number greater than 0
// is true and each number less than or equal to 0 is false.

// Input: [1, 0, -5, 3, 0]
let array = [1, 0, -5, 3, 0];

let output = array.map(convertBoolen);

function convertBoolen(i) {
  if (i <= 0) {
    return false;
  } else {
    return true;
  }
}

console.log(output);
//Alternative Method:
let arr = [1, 0, -5, 3, 0];

let result = arr.map((i) => (i <= 0 ? false : true)); //=> ternary operator
console.log(result);
