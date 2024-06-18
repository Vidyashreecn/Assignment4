//Write a function to write largest of 4 numbers.

function largest(num1, num2, num3, num4) {
  if (num1 > num2 && num1 > num3 && num1 > num4) {
    return num1 + " is larger than " + num2 + " , " + num3 + " and " + num4;
  } else if (num2 > num1 && num2 > num3 && num2 > num4) {
    return num2 + " is larger than " + num2 + " ," + num3 + " and " + num4;
  } else if (num3 > num1 && num3 > num2 && num3 > num4) {
    return num3 + " is larger than " + num1 + " , " + num2 + " and " + num4;
  } else {
    return num4 + " is larger than " + num1 + " , " + num2 + " and " + num3;
  }
}

console.log(largest(36, 78, 604, 67));
console.log(largest(8, 51, 2, 454));
console.log(largest(78, 34, 72, 56));
