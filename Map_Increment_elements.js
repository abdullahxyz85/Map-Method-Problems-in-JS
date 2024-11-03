//Increment Each Element:
//Write a function that takes an array of numbers and
//returns a new array with each number incremented by 1.

// Input: [10, 20, 30, 40]
let array = [10, 20, 30, 40];

let output = array.map(incrementElement);

function incrementElement(element) {
  return (element = element + 1); //element++ likha ga tu output galat ai gi kyu ka return increment huna ka wai nhi krta.
}
console.log(output);
//Alternative Method:
let arr = [10, 20, 30, 40];

let result = arr.map((element) => ++element);

console.log(result);
