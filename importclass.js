//Accessing the exported modules from the classes.js using the require keyword
const Person = require('./classes')

let person = new Person("Ebenezer", "Simon")
console.log(person.fullname())