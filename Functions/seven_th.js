//Write a function declaration named convertTemperature that takes a temperature value and a unit ('C' for Celsius, 'F' for Fahrenheit).
//If the unit is 'C', convert the temperature to Fahrenheit, and
//  if the unit is 'F', convert it to Celsius. Use if-else statements to handle the conversion.
//  Formula: Celsius to Fahrenheit: (C×59)+32  Fahrenheit to Celsius: (F−32)×95

const convertTemperature = (val, unit) => {
  if (unit === "C") {
    return (val * 59) + 32;
  } else if (unit === "F") {
    return (val - 32) *95 ;
  } else {
    return "Inavlid unit";
  }
};

console.log(convertTemperature(32, "C"));
console.log(convertTemperature(96, "F"));
