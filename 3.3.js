// Duplicate a string using the push method
let numInput = prompt("Enter a series of numbers with spaces in between each:");
var array1 = numInput.split(" ");
let array2 = [];

function double() {
  for (let i = 0; i < array1.length; i++) {
    array2.push(array1[i]);
  }
  return double;
}
double();

alert("The duplicated string is " + array2);
