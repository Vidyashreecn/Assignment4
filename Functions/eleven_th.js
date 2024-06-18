//Create a function expression named calculateCompoundInterest that takes three parameters: principal (the initial amount of money), rate (annual interest rate as a decimal), and time (number of years). The function should return the compound interest calculated using the formula:  InterestCompound Interest=principal×(1+rate)time

const calculateCompoundInterest = function (principal, rate, time) {
  let result = principal * (1 + rate) * time;
  return "Compound Interest is " + result;
};

console.log(calculateCompoundInterest(20000, 0.02, 5));
