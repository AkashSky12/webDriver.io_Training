//Inheritence is the main pillar in object oriented programming
//One class can inherit/accure the properties/methods of another class
//The class which inherits the proprties from the main/parent/super class is called child/derived/sub class
//If parent class has any constructor, then the child class also should implement the same. It is a rule
//We have to call the parent class constructor as a first step in our child class constructor

const Person = require("./classes")
class Pet extends Person {
    
    get location() {
        return "Blue Cross"
    }
    constructor (firstName, lastName) {
        //calling parent class constructorusing super keyword
        super(firstName, lastName)
    }

}

let pet = new Pet("Boo", "Zer")
pet.fullname()
console.log(pet.location)