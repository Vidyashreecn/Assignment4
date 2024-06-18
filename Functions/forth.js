//write a function to check number is PrimeNumber or Not

const primeNumber = function (num) {
  let i,
    result = true;
  for (i = 2; i <= num - 1; i++) {
    if (num % i == 0) {
      result = false;
      break;
    }
  }
  if (result == true) {
    console.log(num + " is prime");
  } else {
    console.log(num + " is not prime");
  }
};

primeNumber(87);
primeNumber(5);
