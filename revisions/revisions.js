/**
 * Recursive functions
 */
// // A recursive function is a function that calls itself
// function florian() {
//   florian();
// }

// florian();

// // ! Factorial
// function factorial(number) {
//   //   let result = 1;
//   //   for (let i = 1; i <= number; i++) {
//   //     result *= i; // result = result * i;
//   //   }

//   if (number === 1 || number === 0) return 1;

//   return number * factorial(number - 1);
// }

// console.log(factorial(5)); // => 120
// console.log(factorial(4)); // => 24
// console.log(factorial(3)); // => 6

/**
 * Function three ways
 */
// function hello() {}

// const hello = function() {};

// const hello = () => {};

const names = [
  "Swantje",
  "Vlad",
  "mahamadi",
  "Erwan",
  "Firat",
  "Maria",
  "Osward",
  "Florian",
  "Alex",
  "Albert",
  "Irem",
  "Bleda",
  "Itamar"
];

// A callback is a function that will be called sometime later
const nameBeginsWithM = name => {
  return name[0].toUpperCase() === "M";
};

// In this case, filter is going to **call back** the namesBeginWithM function on each element of the names array
const namesWithM = names.filter(nameBeginsWithM);

console.log(namesWithM); // => ["Mahamdi", "Maria"]
