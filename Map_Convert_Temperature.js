//Convert Temperatures:
//Write a function that takes an array of temperatures in Celsius
//and returns an array of the temperatures converted to Fahrenheit.
//Use the formula F = C * (9/5) + 32.

// Input: [0, 20, 30, 40]
// Expected Output: [32, 68, 86, 104]
let arr = [0, 20, 30, 40];

let output = arr.map(convertTemp);

function convertTemp(Celsius) {
  Farenhiet = Celsius * (9 / 5) + 32;
  return Farenhiet;
}
console.log(output);
//Alternative Method:
let array = [0, 20, 30, 40];

let result = array.map((Celsius) => (Farenhiet = Celsius * (9 / 5) + 32));
console.log(result);
