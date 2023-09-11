function factorial(x) {
  if (x == 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}
// Function to calcul the factorial of a number given x, is x = 0 it returns to 1,
// if x is greater than 0, it calculate the factorial

let x;
do {
  x = parseFloat(
    prompt("Enter a number to calculate its factorial (positive number only): ")
  );
} while (x < 0);

// Using the do-while to keep asking user to until he gives a positive input

const result = factorial(x);
alert("The factorial of " + x + " is " + result);
