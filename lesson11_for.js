for (let i = 0; i < 10; i++) {
    console.log("i = " + i);
}
console.log("================");

for (var i = 0; i < 10; i++) {
    console.log("i = " + i);
}

console.log("out of block i = ", i);


console.log("================");
const obj = { a: 1, b: 2 };
for (let key in obj) {
    console.log(key, obj[key]);
}

console.log("================");

let arr = ["one", 2, "three", 4, 5, 6444]
for (arrT in arr) {
    console.log(`arrT = ${arrT}, arr[arrT] = ${arr[arrT]}`);

}
console.log("================");

let arr2 = ['🍎', '🍌', 'dkdkdkd'];
for (let fruit of arr2) {
    console.log(fruit, typeof fruit, "length", fruit.length);
}

console.log("================");

const arr3 = ['🍎', '🍌', 'dkdkdkd', "s"];
for (let item of arr3) {
    if (item.length == 1)
        console.log(item);

}

// for(var i = 0; i < 8; i++) {
//     console.log("test i = ", i);
// }

i++

console.log("out of block i = ", i);

console.log("two fors");
for (let i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++)
        console.log(i);
}
console.log(j);
var x 
console.log(x);


