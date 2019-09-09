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

/**
 * Callbacks
 */

// const names = [
//   "Swantje",
//   "Vlad",
//   "mahamadi",
//   "Erwan",
//   "Firat",
//   "Maria",
//   "Osward",
//   "Florian",
//   "Alex",
//   "Albert",
//   "Irem",
//   "Bleda",
//   "Itamar"
// ];

// // A callback is a function that will be called sometime later (we don't have any control on when it is called)
// const nameBeginsWithM = name => {
//   return name[0].toUpperCase() === "M";
// };

// // In this case, filter is going to **call back** the namesBeginWithM function on each element of the names array
// const namesWithM = names.filter(nameBeginsWithM);

// console.log(namesWithM); // => ["Mahamdi", "Maria"]

/**
 * Closure
 */

// // A closure is a function that contains another function definition AND a variable declaration

// // const wrapMe = () => {
// //   const age = 33;

// //   const ageIn5Years = () => {
// //     return age + 5;
// //   };
// // };

// // Most commonly closures are used to enclose variables and function away from the global scope
// const age = 33;

// // IIFE = Immediately Invoked Function Expression
// (() => {
//   const age = 40;

//   const ageIn5years = () => {
//     return age + 5;
//   };

//   console.log(ageIn5years()); // => 45
// })();

// console.log(age);

/**
 * Reduce, loops, Array Methods
 */

// let score = 0;
// // While loops are used for conditional repetition
// while (score <= 10) {
//   console.log("Walking...");

//   score++;
// }
// console.log("Yay, I won!");

// // Behind every for loop.... there's a while loop
// for (let i = 0; i <= 10; i++) {
//   console.log("Walking...");
// }

// console.log("Yay, I won!");

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
  "Itamar",
  "Mohammad"
];

// // Fors are used mostly to iterate over arrays
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// // Behind every Array.prototype.forEach... there is a for loop
// names.forEach(name => {
//   console.log(name);
// });

// A common use case for forEach, is to modify each element of an array
// const roster = [];
// names.forEach((name, i) => {
//   roster.push(`${i + 1}: ${name}`);
// });
// console.log(names);
// console.log(roster);

// // Behind every Array.prototype.map... There is a forEach
// const roster = names.map((name, i) => {
//   return `${i + 1}: ${name}`;
// });

// console.log(names);
// console.log(roster);

// let nameList = "";

// // Another common use case for a forEach is to convert an array into a different value
// names.forEach((name, i) => {
//   const separator = i === names.length - 1 ? "" : ", ";
//   nameList += name + separator;
// });

// console.log(nameList);

// Behind every Array.prototype.reduce... there is a forEach
const nameList = names.reduce((listString, name) => {
  const separator = listString.length !== 0 ? ", " : "";
  return listString + separator + name;
}, "");

console.log(nameList);

// So to summarize, we can see that this tree is a useful way to visualize common use cases for loops and array functions
/**
 *
 *                            |--> map
 * while --> for --> forEach <
 *                            |--> reduce --> filter
 *
 */
