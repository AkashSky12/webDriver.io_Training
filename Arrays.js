//('=>' is called fat pipe and represents anonymous function)
let marks1 = Array(6)
let marks2 = new Array(10, 40, 35, 50, 25)
    //var marks2 = new Array(10, 40, 35, 50, 25)
    // console.log(marks2[2])
    //To get the array length 
console.log(marks2.length)
console.log(marks2)
marks2[0] = 20
console.log(marks2)
    //To delete last element in the array
marks2.pop()
console.log(marks2)
    //To add an element at the end of array
marks2.push(12)
console.log(marks2)
    //To add the element at the beginning of array
marks2.unshift(3)
console.log(marks2)
    //To find the index of a element
console.log(marks2.indexOf(35))
    //To find the element in an array. Answer is in boolean
console.log(marks2.includes(12))
    //To slipt into a sub array
console.log(marks2.slice(1, 3))
console.log("*************************************")
    //To print an array
for (let i = 0; i < marks2.length; i++) {
    console.log(marks2[i])
}
console.log("*************************************")
    //To sum all the elements present in array
let sum = 0
for (let i = 0; i < marks2.length; i++) {
    sum = sum + marks2[i]
}
console.log(sum)
console.log("*************************************")
    //To sum all the elements present in array using Reduce method
let total = marks2.reduce((sum, marks) => sum + marks, 0)
console.log(total)
console.log("*************************************")
    //To find all even numbers in an array
let numbers = [3, 5, 6, 7, 8, 12, 14, 15, 18, 19, 20]
let even = []
let odd = []
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        even.push(numbers[i])
    } else if (numbers[i] % 2 != 0) {
        odd.push(numbers[i])
    }
}
console.log(even)
console.log(odd)
console.log("*************************************")
    //To find all even numbers in an array using filter method
let newresult = numbers.filter(everyresult => everyresult % 2 == 0)
console.log(newresult)
    /*NOTE: If we want to perform some iteration and updating value we can use the Reduce method. If we want to filter elements from 
    the array then we can use the filter method to achieve*/
console.log("*************************************")
    //Mapping is used to link a number with a another new number
    //Create new array with even numbers of scores and multiply each value with 3rd array output'[6, 8, 12, 14, 18, 20]'
let scores = [3, 5, 6, 7, 8, 12, 14, 15, 18, 19, 20]
let evenscore = []
let oddscore = []
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        even.push(numbers[i]) * 3
    } else if (numbers[i] % 2 != 0) {
        odd.push(numbers[i])
    }
}
console.log(even * 3)
console.log("*************************************")
    //Create new array with even numbers of scores and multiply each value with 3rd array output using MAP method
let maparray = newresult.map(everyresult => everyresult * 3)
console.log(maparray)
    //Create new array with even numbers of scores and multiply each value with 3rd array output and sum it using MAP method
let maparray1 = newresult.map(everyresult => everyresult * 3)
console.log(maparray)
let totalvalue = maparray1.reduce((sum, val) => sum + val, 0)
console.log(totalvalue)
console.log("*************************************")
    //Another way to achieve the above result is
let newsum = scores.filter(score => score % 2 == 0).map(score => score * 3).reduce((sum, value) => sum + value, 0)
console.log(newsum)
console.log("*************************************")
    //Sorting strings 
let fruits = ["Mango", "Banana", "Apple", "Papaya", "Grapes"]
fruits.sort()
console.log(fruits)
fruits.reverse()
console.log(fruits)
console.log("*************************************")
    //Sorting numbers we have use the custom logic
let input = [12, 1, 16, 3, 18, 36, 7, 21, 30, 9]
    /*input.sort(function(a, b) {
            return a - b
        })*/
input.sort((a, b) => a - b)
console.log(input)
input.sort((a, b) => b - a)
console.log(input)