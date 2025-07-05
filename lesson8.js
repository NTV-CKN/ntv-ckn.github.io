let arr = [1, 2, "s"]

let obj = {
    'a': "sss",
    2211: "s",
    b: ""//uu tien theo convention nay
    ,
    n: function (params) {
        console.log("call inner")
        console.log(params)
        return "End"
    }
}

// console.log(typeof arr);
// console.log(typeof obj);
// console.log(obj["sss"]);
// console.log(obj.b);
// // console.log(obj.2211); //khong duoc
// console.log(obj[2211]); //duoc
// console.log(obj['2211']); //duoc
// console.log(obj.a);
// console.log(` ssxs ${obj.n("Hello", "s")}`);
// console.log(` ssxs ${obj.n}`);
console.log(obj.c="22"); 
console.log(obj); 
//console.log(obj[ssss]="22");//error
console.log(obj['2211']="22");
console.log(obj); 