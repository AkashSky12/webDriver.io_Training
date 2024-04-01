//Objects are collection of properties, functions

let person = {
    firstName : "Akash",
    lastName : "Simon",
    age : 30,
    fullname : function() {
        console.log(this.firstName+this.lastName)
    }
}

console.log(person.firstName+" "+person.lastName)
console.log(person["firstName"])
console.log("***********************************************")
//Modify the value in the run time
person.firstName = "Ebenezer"
console.log(person["firstName"])
console.log("***********************************************")
//Add new property to the object
person.gender = "Male"
console.log(person)
console.log("***********************************************")
//To delete property of an object
delete person.gender
console.log(person)
console.log("***********************************************")
//To check if the property exists in object
console.log("firstName" in person)
console.log("lastName" in person)
console.log("***********************************************")
//To iterate properties inside the object
for(let key in person) {
    console.log(person[key])
}
console.log("***********************************************")
//Using Anonymous function in an object. Anonymous functions are functions without any name.
console.log(person.fullname())