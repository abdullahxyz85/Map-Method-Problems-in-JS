//Square the Numbers:
//Write a function that takes an array of numbers and
//returns a new array with the squares of each number.

//Input: [1, 2, 3, 4]
let array = [1, 2, 3, 4];

let output = array.map(squareNum);
function squareNum(i) {
  return i * i;
}

console.log(output);
//Alternative Method:
let arr = [1, 2, 3, 4];

let result = arr.map((element) => Math.pow(element, 5)); //Math.pow(base, exponent)

console.log(result);
