// Add Prefix to Elements:
//Given an array of strings,
//use map to add a prefix (e.g., "Mr." or "Ms.") to each element.

// Input: ["Ali", "Sara", "Ahmed"], Prefix: "Mr./Ms. "
// Expected Output: ["Mr./Ms. Ali", "Mr./Ms. Sara", "Mr./Ms. Ahmed"]
let array = ["Ali", "Sara", "Ahmad"];

let output = array.map(addPrefix);

function addPrefix(i) {
  return "Mr./Ms. " + `${i}`;
}
console.log(output);
//Alternative Method:
let arr = ["Ali", "Sara", "Ahmad"];

let result = arr.map((i) => "Mr./Ms. " + `${i}`);

console.log(result);
//Filter method bs hama true wali values hi return krta ha.
//Map method hama dosri true or false wli values dono return krta hu
