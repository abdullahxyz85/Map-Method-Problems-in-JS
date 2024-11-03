// Double the Numbers:
//  Given an array of numbers,
//  use map to create a new array with each number doubled.
// Input: [1, 2, 3, 4]
//Map method that takes the callback and applies that function to each elemt of the array and return a new array.
//In Map when any condition is apply to element of array it gives or return the true or false.
//In filter method when any operator(*, +, -, /) is perform it gives the same above array no changes.
//In filter method condition is required and it returns only the true values.

let nums = [1, 2, 3, 4];

let output = nums.map(doubleNum);
function doubleNum(i) {
  return i * 2;
}

console.log(output);
//Alternative Method:
let arr = [1, 2, 3, 4];

let result = arr.map((i) => i * 2); //Ya sir sa pouchna ha.

console.log(result);
