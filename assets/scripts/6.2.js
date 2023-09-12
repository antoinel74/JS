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
}

// Testing
const rectangle1 = new rectangle(0, 0, 5, 5);
const rectangle2 = new rectangle(0, 0, 5, 5);

console.log(rectangle1.collides(rectangle2)); // TRUE
