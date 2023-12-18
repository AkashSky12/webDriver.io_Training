//Block of code
//var - global level/functional
//let global level/block level {}
// const greet = "Night"
let greet = "Evening"
if (1 == 1) {
    let greet = "Afternoon"
}

function add(a, b) {
    let greet = "Morning"
    return a + b
}

let sum = add(2, 2)
console.log(sum)
console.log(greet)