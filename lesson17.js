let sum = (a, b) => {
    console.log("call");
    return a + b
}

const concat = (a, b) => a + " con cat " + b + " = " + a + b
let concat2 = (a, b) => { a + " con cat " + b + " = " + a + b }//undefined
concat3 = (a, b) => a + " con cat " + b + " = " + a + b

console.log("sssss ", sum(2, 3));
console.log("sssss ", concat(2, 3));
console.log("sssss ", concat2(2, 3));
console.log("sssss ", concat3(2, 3));
