//Format Prices:
//Given an array of numbers representing prices,
// use map to return a new array where each price is formatted
// as a string with a dollar sign.

//Input: [5, 20, 100] ["$5", "$20", "$100"]
let array = [5, 20, 100];

let output = array.map(formatedPrice);
function formatedPrice(i) {
  let format = "$" + `${i}`;
  return format;
}

console.log(output);
//Alternative Method;
let arr = [5, 20, 100];

let result = arr.map((i) => "$" + `${i}`);
console.log(result);
