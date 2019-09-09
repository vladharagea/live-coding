/**
 * Recursive functions
 */
// // A recursive function is a function that calls itself
// function florian() {
//   florian();
// }

// florian();

// ! Factorial
function factorial(number) {
  //   let result = 1;
  //   for (let i = 1; i <= number; i++) {
  //     result *= i; // result = result * i;
  //   }

  if (number === 1 || number === 0) return 1;

  return number * factorial(number - 1);
}

console.log(factorial(5)); // => 120
console.log(factorial(4)); // => 24
console.log(factorial(3)); // => 6

/**
 * Closure
 */
