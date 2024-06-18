//Create a function expression named findLargest that takes three numbers as parameters and returns the largest of the three using if-else statements.

const findLargest = function (num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1 + " is Greater than " + num2 + " and " + num3;
  } else if (num2 > num1 && num2 > num3) {
    return num2 + " is Greater than " + num2 + " and " + num3;
  } else {
    return num3 + " is Greater than " + num1 + " and " + num2;
  }
};

console.log(findLargest(3, 5, 6));
console.log(findLargest(68, 45, 2));
console.log(findLargest(34, 4, 92));
