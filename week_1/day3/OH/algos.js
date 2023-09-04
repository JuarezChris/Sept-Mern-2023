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

// const doesContain = (array, val) => array.includes(val)

// console.log(doesContain([1,2,3,4,5], 7))
// console.log(doesContain([1,2,3,4,5], 3))

// [1,2,3,4,5], 7 --> false

// * Given an array and a value write a function that returns a count of how many times that value appears in the array
// * Array can contain numbers or strings. value can be either.
// * Return the count of the value

let things = ['Tony', 'Fred', 5, 20, 'Tony', 7, 7] 
// value 5 --> return 1
// value 'Tony' --> return 2

// Loop through things
// Create a var counter 
// return the counter
// Declare a function
// Increase counter by ++
// Comparison ==
// Conditionals

const countThings = (arr, val) => {
    let counter = 0
    for(let idx = 0; idx < arr.length; idx++){
        if(arr[idx] == val){
            counter++
        }
    }
    return counter
}

console.log(countThings(things, 5))
console.log(countThings(things, 'Tony'))



// * Write a function called sumEvenNums to sum all EVEN numbers between 1 and 100 the function should return the sum at the very end output 2550



// * Given an array of 'weak passwords' and a password (string) determine if the password is strong or weak 
// * if the password is in the array of weak passwords return 'Weak password'
// * if the password is not found in the list of weak passwords return 'Strong password'
let weakPass = ['12345678', 'password', 'secretPassword', 'strongPassword', 'youllNeverGuess']
let password = '123456781234321dfdf' // ---> Strong Password
let password2 = '12345678' // ---> Weak Password
// conditionals
// use the comparison operator ==
// for loop, looping through weakPass
// Declare a function

const stringPass = (password) => {
    for(let idx = 0; idx < weakPass.length; idx++){
        if(weakPass[idx] == password){
            return 'Weak Password'
        }
    }
    return 'Strong Password'
}

// console.log(stringPass(password))
// console.log(stringPass(password2))



// * Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.


// Rest Operator (...):
// The rest operator, represented by three dots (...), allows you to capture multiple function arguments or the remaining elements of an array into a single variable. It collects the arguments or elements into an array.