// Given an X,Y coordinate plane as the global workspace, create a Rectangle class to which other Rectangles can be added.
// There should also be a function to determine if a given X,Y point hits any of its children Rectangles (ones added to it).

// Example: "Parent" Rectangle is a 10x10, a 2x3 child is placed in the bottom left corner (0,0), and a 3x2 child is placed in the top-right corner (7,8)
// (The children rectangles are represented by Xs below)
// (1,1) and (9,9) would hit interior children rectangles, but (5,5) would not (represented by Ts below)

// - - - - - - - X X T
// - - - - - - - X X X
// - - - - - - - - - -
// - - - - - - - - - -
// - - - - - - - - - -
// - - - - - T - - - -
// - - - - - - - - - -
// X X - - - - - - - -
// X T - - - - - - - -
// X X - - - - - - - -

// AC:
// 1) Write a Rectangle class
// 2) Write an addChild method to add in another Rectangle as a child
// 3) Write an isPointInChildren method to return a boolean
class Rectangle {
  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.widthArray = [];
    this.heightArray = [];
  }

  addChild(width, height, x, y) {
    this.childWidth = width;
    this.childHeight = height;

    if (
      x < this.width &&
      width < x + this.width &&
      y < this.height &&
      height < y + this.height
    ) {
      this.widthArray.push(Array.from({ length: width }, (_, i) => i + x));
      this.heightArray.push(Array.from({ length: height }, (_, i) => i + y));
    } else {
      console.error("It must be a smaller rectangle");
    }
  }
  isPointInChildren(x, y) {
    if (this.widthArray.length > 0 && this.heightArray.length > 0) {
      for (let i = 0; i < this.widthArray.length; i++) {
        if (this.widthArray[i].includes(x) && this.heightArray[i].includes(y)) {
          return true;
        }
      }
    } else {
      console.error("You should use addChild First");
    }
    return false;
  }
}

let rectangle = new Rectangle(10, 10);
rectangle.addChild(2, 3, 0, 7);
rectangle.addChild(3, 2, 7, 0);
console.log(rectangle.widthArray, rectangle.heightArray);
console.log(rectangle.isPointInChildren(1, 8));
console.log(rectangle.isPointInChildren(0, 9));
console.log(rectangle.isPointInChildren(7, 7));
console.log(rectangle.isPointInChildren(3, 7));
