// I would like to build an algorithm that gives me the result of the following multiplications 13*5, 22*6, 24*24

// let a = 13, 
//     b = 5, 
//     c = 22, 
//     d = 6,
//     e = 24;

// let mult1 = a * b
// console.log(mult1)

// let mult2 = c * d
// console.log(mult2)

// let mult3 = e * e
// console.log(mult3)

// function multiplication () {
//     let a = 13, 
//     b = 5, 
//     c = 22, 
//     d = 6,
//     e = 24;

//     let mult1 = a * b
//     console.log(mult1)

//     let mult2 = c * d
//     console.log(mult2)

//     let mult3 = e * e
//     console.log(mult3)
// }

// multiplication()


// function multiplication(a, b){
//     console.log(a * b)
// }

// function multiplication(a, b){
//     console.log(`My a is ${a}`)
//     console.log(`My b is ${b}`)
//     if(typeof(a) !== 'number' || typeof(b) !== 'number'){
//         console.log(`One of your arguments is not a number`)
//         return;
//     }
//     let mult = a * b
//     console.log(mult)
// }

// multiplication(13, ' babylon')
// multiplication(13)
// multiplication(13, 15 && 20, 5)
// multiplication(13, 5)
// multiplication(22, 6)
// multiplication(24, 24)
// function multiplication(13, 5){
//     let mult = 13 * 5;
//     console.log(mult)
// }


// function multByTwentyFive (a, b = 25) {
//     console.log(a * b);
// }

// multByTwentyFive(5)


// Check if a number is perfectly divided by 7

// function checkIfDividedBySeven (num) {
//     //First we check the input
//     if(isNaN(num)){
//         console.log(`Feed me a number you fool`)
//         return
//     }

//     //Then we check if num%7 === 0
//     if(num%7 === 0){
//         console.log(`${num} is divided by 7`)
//     } else console.log(`${num} is NOT divided by 7`)
// }

// checkIfDividedBySeven('steve')
// checkIfDividedBySeven(22)
// checkIfDividedBySeven(49)


// let isDividedBySeven = function (num) {
//     //First we check the input
//     if(isNaN(num)){
//         return false;
//     }

//     //Then we check if num%7 === 0
//     if(num%7 === 0){
//         return true;
//     } else return false;
// }

// console.log(isDividedBySeven(49))

// checkIfDividedBySeven('steve')
// console.log(checkIfDividedBySeven('steve'))
// let res = checkIfDividedBySeven('steve');
// console.log(res);
// checkIfDividedBySeven(22)
// checkIfDividedBySeven(49)


// Calling a function form within a function
// Input: 5
// 1st function: 5*5 = 25
// 2nd funtion: 25 * 12 = 1234421

function selfMulti (num) {
    console.log(`I am inside selfMulti`)
    let res = num * num
    console.log(`I have multiplies ${num} by it self`)
    console.log(`I will call multiTwelve for ${res}`)
    multiTwelve(res)
    console.log(`I will print the selfMulti result`)
    console.log(res)
}

function multiTwelve (num) {
    console.log(`I have inside multiTwelve`)
    let res = num * 12
    console.log(res)
    console.log(`I am leaving multitwelve`)

}

console.log(`I am about to start calling functions`)
selfMulti(5)
console.log(`I am done calling functions`)

