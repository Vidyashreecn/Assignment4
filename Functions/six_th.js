//Write an arrow function named max that takes two numbers as parameters and returns the greater of the two using the ternary operator.

const max = (num1, num2) => {
  let result =
    num1 > num2
      ? num1 + " is greater than " + num2
      : num1 + " is greater than " + num2;
  return result    
};

console.log(max(20, 5));
console.log(max(4, 8));
