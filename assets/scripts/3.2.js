var numInput = prompt("Enter a series of numbers with spaces in between each:");
var numbers = numInput.split(" ");
let sum = 0;

// Sum function
function mysum() {
  for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i]);
  }
  return sum;
}

mysum();

// Average
function myavg() {
  let avg = sum / numbers.length;
  return avg;
}

alert("The average of your numbers is " + myavg());
