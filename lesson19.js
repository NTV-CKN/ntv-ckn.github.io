let sum = (a, b, printResult) => {
    //  setTimeout( printResult, 5000)//wait and undefined
    // setTimeout( printResult(a+b), 5000)//no wait and a+b
    setTimeout(() => { printResult(a + b) }, 5000)//wait and a+b
}

let calculator = (result) => {
    console.log("I'm calculator, result a + b =", result)
}

console.log("s");


let i = 0
let countI = () => {
    setInterval(() => {
        if (i != 5) {
            console.log("value i =", i++);
        } else {
            return
        }
    }, 1000)
}

countI()
// sum(2, 3, calculator)
// sum(2, 3, calculator(1)) //error
// console.log(calculator);
// console.log(calculator(2));

