let day = "Sunday "
console.log(day.length)
console.log(day.slice(0, 3))
console.log(day[0])
let splitDay = day.split("n")
console.log(day.split("n"))
console.log(splitDay[1].length)
console.log(splitDay[1].trim().length)

console.log("------------------------------------------------------------------------------------------")
//To convert string to int and perform diff operation
let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)
console.log(diff.toString())

console.log("------------------------------------------------------------------------------------------")
let newQuote = day + "is funday and freeday!!!"
console.log(newQuote)
//First occurence of 'day' from the output
let val = newQuote.indexOf("day")
console.log(val)
//Second occurence of 'day' from the output
let val1 = newQuote.indexOf("day", 5)
console.log(val1)

//Write a program where the occurence of day is catured and print the count of occurence
console.log("------------------------------------------------------------------------------------------")
let count = 0
let inp = newQuote.indexOf("day")
while(inp != -1) {
    count++
    inp = newQuote.indexOf("day", inp + 1)
}
console.log(count)