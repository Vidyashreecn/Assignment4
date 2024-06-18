//Create a function expression named getDayName that takes a number (1-7) as a parameter and returns the corresponding day of the week (1 for Monday, 7 for Sunday).

const getDayName = function (num) {
  switch (num) {
    case 1:
      return "Monday";

    case 2:
      return "Tuesday";

    case 3:
      return "Wednesday";

    case 4:
      return "Thursday";
      
    case 5:
      return "Friday";

    case 6:
      return "Saturday";

    case 7:
      return "Sunday";
  }
};

console.log(getDayName(3));
