function calcDistance(x1, x2, y1, y2) {
  var a = x1 - x2;
  var b = y1 - y2;
  var c = Math.hypot(a, b);
  return c;
}
// This function is made to cacluate the distance between 1 (x1, y1) and 2 (x2, y2)
// Using the math.hypot is easier than  math.sqrt (a*a + b*b )
// Now let's ask our user to prompt the 1 and 2 points coordonates.

var x1 = parseFloat(prompt("Enter the x axis of the first point : "));
var y1 = parseFloat(prompt("Enter the y axis of the first point : "));
var x2 = parseFloat(prompt("Enter the x axis of the second point : "));
var y2 = parseFloat(prompt("Enter the y axis of the second point : "));

var distance = calcDistance(x1, x2, y1, y2); // initiliaze the function in a new variable

alert("The distance between A and B is : " + distance);
//display the result
