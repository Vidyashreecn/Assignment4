//Write a function declaration named calculateArea that takes two parameters: shape and dimension.
//  If the shape is "circle", the dimension represents the radius and the function should return the area of the circle.
//  If the shape is "square", the dimension represents the side length and the function should return the area of the square. Use switch case to handle the different shapes.
// •	Area of a circle: π×radius2
// •	Area of a square: side×side

function calculateArea(shape, dimension) {
  switch (shape) {
    case "circle":
      return 3.14 * dimension * 2;

    case "square":
      return dimension * dimension;

    default:
      return "Icnvalid shape";
  }
}

console.log(calculateArea("circle", 5));
console.log(calculateArea("square", 8));
console.log(calculateArea("triangle", 7));
