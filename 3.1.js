var numInput = prompt("Enter a series of numbers with spaces in between each:");
var numbers = numInput.split(" ");
let sum = 0;

function mysum() {
  for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i]); // Needed to add the Number conversion to threat them as number
  }
  return sum; // Return the sum
}

alert("The sum of your numbers is " + mysum());
