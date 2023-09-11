// Duplicate a string using a specific copy method
let numInput = prompt("Enter a series of numbers with spaces in between each:");
var array1 = numInput.split(" ");
let array2 = [...array1];

alert("The duplicated string is " + array2);
