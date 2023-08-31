// es6
// different types of variables
let luckyNum = 7

let name = "Ken"

let isHungry = true



// ken.age = 35
// ken.isHuman = true
// console.log(ken)

// ken = ["ken", 35]

// const num1 = 7

// const sayHi = (name) => {
    //     console.log(name)
    // }
    
    // sayHi("ken")
    
const ken = {
        firstName: "Ken",
        power: "Kenergy",
        isHuman: false
    }

// ken = []
// var firstName = ken.firstName
// var power = ken.power
// var isHuman = ken.isHuman

// destructuring
// const {firstName, power, isHuman} = ken
// console.log(firstName)
// console.log(power)
// console.log(isHuman)

// firstName = "Barbie" // will cause an error
var names = ["Ken", "Garrett", "Jose", "Matt"]
const [, n2,, n4] = names
console.log(n2, n4)

// console.log(n2)

// spread operator
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let comboArr = [...arr1, ...arr2]; // for making one array out of two arrays
let nestedArray = [...arr1, arr2]; // for nested array
console.log(comboArr)
console.log(nestedArray)

// Prediction assignment
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar) // Tesla
// console.log(otherRandomCar) // Mercedes