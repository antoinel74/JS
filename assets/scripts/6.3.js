class rectangle {
  constructor(topLeftXpos, topLeftYpos, width, length) {
    this.topLeftXpos = topLeftXpos;
    this.topLeftYpos = topLeftYpos;
    this.width = width;
    this.length = length;
  }
  // Create a class rectangle with a constructor that includes all the informations we currently have

  // Starting the collides method
  collides(otherRectangle) {
    const topLeftcorner = { x: this.topLeftXpos, y: this.topLeftYpos };
    const topRightcorner = {
      x: this.topLeftXpos + this.length,
      y: this.topLeftYpos,
    };
    const bottomLeftcorner = {
      x: this.topLeftXpos,
      y: this.topLeftYpos + this.width,
    };
    const bottomRightcorner = {
      x: this.topLeftXpos + this.length,
      y: this.topLeftYpos + this.width,
    };
    // Find the coordinates of the four corner thanks to the provided informations .

    const otherTopleft = {
      x: otherRectangle.topLeftXpos,
      y: otherRectangle.topLeftYpos,
    };
    const otherTopright = {
      x: otherRectangle.topLeftXpos + otherRectangle.length,
      y: otherRectangle.topLeftYpos,
    };
    const otherBottomleft = {
      x: otherRectangle.topLeftXpos,
      y: otherRectangle.topLeftYpos + otherRectangle.width,
    };
    const otherBottomright = {
      x: otherRectangle.topLeftXpos + otherRectangle.length,
      y: otherRectangle.topLeftYpos + otherRectangle.width,
    };
    // Same method to find the coordonates of the 4 courner of the other rectangle
    // Putting the if for the otherrectangle to collide first one
    if (
      topLeftcorner.x < otherBottomright.x &&
      topRightcorner.x > otherTopleft.x &&
      topLeftcorner.y < otherBottomright.y &&
      otherBottomleft.y > otherTopleft.y
    ) {
      return true; // Return true if theres is a collision somewhere
    }
    return false; // Return false if there is no collision
  }
  toString() {
    return `Rectangle : (x: ${this.topLeftXpos}, y: ${this.topLeftYpos}, width: ${this.width}, length: ${this.length})`;
  }
}

//This function randomize a rectangle (top left coordinates, width and length)
function randomizeRectangle() {
  const topLeftXpos = Math.floor(Math.random() * 1000); // Setting a max value to avoid infinite weirdness
  const topLeftYpos = Math.floor(Math.random() * 1000);
  const width = Math.floor(Math.random() * 10); // Same shit as above
  const length = Math.floor(Math.random() * 10);
  return new rectangle(topLeftXpos, topLeftYpos, width, length);
}

// Pushing 1000times the function to generate 1000 rectangles
const rectangles = [];
for (let i = 0; i < 1000; i++) {
  rectangles.push(randomizeRectangle());
}

// Collision verifier and display ONLY collided rectangles
for (let i = 0; i < rectangles.length; i++) {
  for (let j = i + 1; j < rectangles.length; j++) {
    if (rectangles[i].collides(rectangles[j])) {
      console.log("Collision detected: ");
      console.log(
        `There is a collision between ${rectangles[i]} and ${rectangles[j]}`
      );
    }
  }
}
/* At first it shows me the collision between Objects objects only so I add a "toString" method in my rectangle and call it in the last console.log to 
display the string content. With the addition of the toStrings method, the final console.log display all the informations of the 2 collided rectangles*/
