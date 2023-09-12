class circle {
  constructor(xpos, ypos, radius) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
  }
  move(xOffset, yOffset) {
    this.xpos += xOffset;
    this.ypos += yOffset;
  }
  get surface() {
    return Math.PI * this.radius ** 2;
  }
}

// This class create a circle using a constructor to define his position and his size
// Add a method to move the position of the circle by adding the offset value to the x and y
// Return a calcul of the function using the surface formula (radius*radius) * pi

const theCircle = new circle(0, 0, 7);
// Initialize the Circle in the position x0, y0 with a radius of 7 and display it below

console.log(
  "Actual circle properties are x :",
  theCircle.xpos,
  " y : ",
  theCircle.ypos,
  "radius : ",
  theCircle.radius,
  "surface : ",
  theCircle.surface
);

//Moving the circle using the .move method (now the circle normally have a position of 2:5 and a radius of 5)
theCircle.move(2, 2);

//Checking ..
console.log(
  "Moved circle properties are x :",
  theCircle.xpos,
  " y : ",
  theCircle.ypos,
  "radius : ",
  theCircle.radius,
  "surface :",
  theCircle.surface
);
