//Write an arrow function named calculateTriangleArea that takes two parameters: base and height. The function should return the area of the triangle calculated using the formula: Area=21×base×height

const calculateTriangleArea = (base, height) => {
  let area = 21 * base * height;
  return area;
};
console.log(calculateTriangleArea(20, 30));
