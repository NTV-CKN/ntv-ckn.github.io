// let a = 5, b = 5
let a = 5, b = ' 5 '
let obj1 = {
    name: "rudo",
    
}, obj2 = {
    name1: "rudo"
}

let obj3 = obj1

let ab = ''//empty
let ac = {}//empty
let ad = []//empty
let ae 
let af=null 

console.log(a == b);//true
console.log(a === b);//false

console.log(obj1 == obj2);//false 
console.log(obj1 === obj2);//false

console.log(obj1 == obj3);//true
console.log(obj1 === obj3);//true

console.log(obj1 == "rudo");

console.log("\n");

console.log(ab);
console.log(ac);
console.log(ad);
console.log(ae);
console.log(af, typeof af);

