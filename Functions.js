//A block of code can be executed together using a function
function add(a, b) {
    return a + b
}
let sum = add(3, 3)
console.log(sum)

//Anonymous functions/Function expressions do not have name. ('=>' is called fat pipe and represents anonymous function)
/*let sumofInteger = function(c, d) {
    return c + d
}
sumofInteger = add(6, 6)*/
let sumofInteger = ((c, d) => c + d)
console.log(sumofInteger(6, 6))