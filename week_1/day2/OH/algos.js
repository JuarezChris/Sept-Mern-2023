// * You will be given an array and a value. you need to write a function to check whether the provided array contains the value.
// * Array can contain numbers or strings. value can be either.
// * Return true if the array contains the value,

// Need to declare a function that takes in two arguments
// Need a for loop
// conditional inside the for loop
// return true or false

// const doesContain = (array, val) => { 
//     for(let idx = 0; idx < array.length; idx++){
//         if(array[idx] === val){
//             return true
//         }
//     }
//     return false
// }
// or using a built in

const doesContain = (array, val) => array.includes(val)

console.log(doesContain([1,2,3,4,5], 7))
console.log(doesContain([1,2,3,4,5], 3))

// [1,2,3,4,5], 7 --> false

// * Given an array and a value write a function that returns a count of how many times that value appears in the array
// * Array can contain numbers or strings. value can be either.
// * Return the count of the value



// * Write a function called sumEvenNums to sum all EVEN numbers between 1 and 100 the function should return the sum at the very end output 2550



// * Given an array of 'weak passwords' and a password (string) determine if the password is strong or weak 
// * if the password is in the array of weak passwords return 'Weak password'
// * if the password is not found in the list of weak passwords return 'Strong password'
let weakPass = ['12345678', 'password', 'secretPassword', 'strongPassword', 'youllNeverGuess']
let password = '123456781234321dfdf'


// * Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.


// Rest Operator (...):
// The rest operator, represented by three dots (...), allows you to capture multiple function arguments or the remaining elements of an array into a single variable. It collects the arguments or elements into an array.