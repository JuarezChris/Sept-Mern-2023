class Chicken{
    constructor(name, specialAttack){
        this.name = name
        this.specialAttack = specialAttack
        this.health = 100
        this.is_defeated = false
        this.power = 30
        this.speed = 20
    }

    introChicken(){
        console.log(`Welcome ${this.name} to the stage!!`)
    }

    attack(target){
        if(target.is_defeated || this.is_defeated){
            return this
        }
        const powerBonus = Math.floor(Math.random() * 2)
        if(powerBonus == 0){
            const dmg = Math.floor(Math.random() * 80) + this.power
            target.health -= dmg
            console.log("Bonus Attack!!")
            console.log(`${this.name} attacks ${target.name} with ${this.specialAttack} attack for ${dmg} damage!`)
            console.log(`${target.name} health is now ${target.health}!`)
        }
        else{
            const dmg = Math.floor(Math.random() * 80)
            target.health -= dmg
            console.log(`${this.name} attacks ${target.name} with ${this.specialAttack} attack for ${dmg} damage!`)
            console.log(`${target.name} health is now ${target.health}!`)
        }
        if(target.health <= 0){
            target.health = 0
            // console.log(`${target.name} is defeated!!`)
            target.is_defeated = true           
        }
    }
}

class Ninja extends Chicken{
    constructor(name, specialAttack){
        super(name, specialAttack)
        this.ninjaBonus = 10
        this.power = 20
        this.speed = 40
    }

    ninjaStance(){
        console.log("Ninja Stance")
    }



}

class Sumo extends Chicken{
    constructor(name, specialAttack){
        super(name, specialAttack)
        this.sumoBonus = 10
        this.power = 40
        this.speed = 5
    }

    sumoStance(){
        console.log("Sumo Stance")
    }
}


const fred = new Ninja("Fred", "Baguk!")
const ted = new Ninja("Ted", "Bill and Ted phone booth combo!!")
const chickenLittle = new Sumo("Chicken Little", "The sky is falling!!")

// fred.sumoStance()

fred.attack(ted)
ted.attack(fred)
fred.attack(ted)
ted.attack(fred)
fred.attack(ted)
ted.attack(fred)

// console.log(fred.name)
// console.log(fred.health)