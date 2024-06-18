//Write a function declaration named simpleCalculator that takes three parameters: num1, num2, and operator ('+', '-', '*', '/'). The function should perform the corresponding arithmetic operation and return the result using a switch case.

function simpleCalculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid Operator";
  }
}

console.log(simpleCalculator(2,5,"+"));
console.log(simpleCalculator(5,4,"-"));
console.log(simpleCalculator(2,8,"/"));
console.log(simpleCalculator(9,6,"&"));