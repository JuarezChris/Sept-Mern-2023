class Human{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    sayHi(){
        console.log(`This humans name is ${this.name}`)
        return this
    }

    sayGoodbye(){
        console.log(`This human ${this.name} is leaving`)
        return this
    }
}

const human1 = new Human('Garrett', '10')
const human2 = new Human('Jose', '11')

human1.sayHi().sayGoodbye()
// human2.sayHi()