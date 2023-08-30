// variables & data types

var luckyNum = 7

var name = "Ken"

var isHungry = true


var ken = {
    firstName: "Ken",
    power: "Kenergy",
    isHuman: false
}

// console.log(ken.firstName)
// console.log(names[2])

// functions
function sayHi(name) {
    console.log("Hello " + name)
}

sayHi("Ken")

var names = ["Ken", "Garrett", "Jose", "Matt"]
// for loops & conditional
for(let i = 0; i < names.length; i++){
    console.log(names[i])
    if(names[i] == "Ken"){
        console.log("KEN HAS KENERGY!!")
    }
    else if(names[i] == "Garrett"){
        console.log("Does Garrett have Kenergy? Yes he does!")
    }
    else{
        console.log(names[i])
    }
}

