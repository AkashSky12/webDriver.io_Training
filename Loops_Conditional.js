const flag = true;

if (flag == !true) {
    console.log("Condition satisfied");
} else {
    console.log("Condition not satisfied");
}

let i = 0
while (i < 5) {
    i++
    console.log(i);
}

do {
    i++;
} while (i > 10) {
    console.log(i)
}

//find first 3 common multiples of 2 and 5 in 100
console.log("**************************************************************")
let count = 0
for (let j = 1; j <= 100; j++) {
    if (j % 2 == 0 && j % 5 == 0) {
        count++
        console.log(j)
    }
    if (count == 3) {
        break
    }
}