function calcSurface() {
  let w = prompt("Enter the width of your rectangle :"); // Prompt the width
  let l = prompt("Enter the length of your rectangle :"); // Prompt the length
  var width = parseInt(w); // use number not string
  var length = parseInt(l);
  return width * length; // calculate the surface
}

alert("The surface of your rectangle is : " + calcSurface()); // display the result
