//Classes are introduces from the ES6 engine. 
//Using module.exports keyword to make it public and access in importclass file
module.exports = class Person {
    age = 30
    base_location = "India"
    get location() {    //getter method
        return "Malaysia"
    }
    
//Constructor are methods which executes by default when you create object of the class    
constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}
//These are called methods inside the class
fullname() {
    console.log(this.firstName+this.lastName)
}

} 

// let person = new Person("Akash", "Simon")
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullname())



