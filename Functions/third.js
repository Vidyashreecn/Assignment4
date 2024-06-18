//Write a funtion to check number is even or Odd

const checkNum = function (num) {
  let result = num % 2 == 0 ? "Even" : "Odd";
  return result;
};

console.log(checkNum(3));
console.log(checkNum(6));
