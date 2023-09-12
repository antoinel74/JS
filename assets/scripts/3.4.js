let numInput = prompt("Enter a list a numbers separated by a space :");
var numbers = numInput.split(" ");
let min, max; // declaring the variable here so i can acess it outside the

// Function to find min and max element within the numbers array
function findMinMax() {
  min = Math.min(...numbers);
  max = Math.max(...numbers);
}

findMinMax(); // Call the function
alert("The minimum element is: " + min + " and the maximum element is: " + max); // Display the result
