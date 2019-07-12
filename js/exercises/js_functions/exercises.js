// Write a function that takes as an input a first name and a last name and returns a full name. Then call the function with three different names and last names.

function fullName(firstName, lastName) {
    // return firstName + ' ' + lastName
    // return `${firstName} ${lastName}`
    console.log(`${firstName} ${lastName}`)
}

// let res = fullName('Vas', 'Psych')
// console.log(res)
fullName('Vas', 'Psych')

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// Write a function that will let you know if a number is divided by 5 and 3. Then call the function for the following numbers 66,75,123,554,225,455635. After that call the function for all the odd numbers from 0 till 100.

// Function that checks if a number is divided by 3 and 5
// function isDividedByThreeAndFive(num) {
//     if(num%3 == 0 && num%5 == 0)
//         console.log(`${num} is divided by 3 and 5 perfectly`)
//     else console.log(`${num} is NOT divided by 3 and 5 perfectly`)

//     // let res = (num%3 == 0 && num%5 == 0) ? console.log(`${num} is divided by 3 and 5 perfectly`) : console.log(`${num} is NOT divided by 3 and 5

// }

function isDividedByThreeAndFive(num) {
    if(num%3 == 0 && num%5 == 0)
        printResult(true, num)
    else printResult(false, num)

    // let res = (num%3 == 0 && num%5 == 0) ? console.log(`${num} is divided by 3 and 5 perfectly`) : console.log(`${num} is NOT divided by 3 and 5

    // let res = (num%3 == 0 && num%5 == 0) ? printResult(true, num) : printResult(false, num)
}

function printResult(arg, num) {
    if(arg)
        console.log(`${num} is divided by 3 and 5 perfectly`)
    else console.log(`${num} is NOT divided by 3 and 5 perfectly`)
}

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// Then call the function for the following numbers 66,75,123,554,225,455635.

isDividedByThreeAndFive(66)
isDividedByThreeAndFive(75)
isDividedByThreeAndFive(123)
isDividedByThreeAndFive(554)
isDividedByThreeAndFive(225)
isDividedByThreeAndFive(455635)

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// Call the function for all the odd numbers from 0 till 100.

// for(let i = 0; i <= 100; i++) {
//     if( i%2 !== 0 )
//         isDividedByThreeAndFive(i)
// }

function checkPlease(num) {
    for(let i = 0; i <= num; i++) {
        if( i%2 !== 0 )
            isDividedByThreeAndFive(i)
    }
}

checkPlease(20)