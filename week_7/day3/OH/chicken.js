class Chicken{
    constructor(name, specialAttack){
        this.name = name
        this.specialAttack = specialAttack
        this.health = 100
    }

    introChicken(){
        console.log(`Welcome ${this.name} to the stage!!`)
    }

    attack(target){
        const dmg = Math.floor(Math.random() * 20)
        target.health -= dmg
        console.log(`${this.name} attacks ${target.name} with ${this.specialAttack} attack for ${dmg} damage!`)
        
    }
}

class Ninja extends Chicken{
    constructor(name, specialAttack){
        super(name, specialAttack)
        this.ninjaBonus = 10
    }



}


const fred = new Ninja("Fred", "Baguk!")
const ted = new Ninja("Ted", "Bill and Ted phone booth combo!!")

fred.attack(ted)

// console.log(fred.name)
// console.log(fred.health)