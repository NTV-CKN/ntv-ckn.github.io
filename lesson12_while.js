let arr = ["nt", 'nz', `kakakakaka`, "laklsaklsalsalks"]

let i = 0

while(i < arr.length) {
    console.log(`top ${i+1} is ${arr[i]}`);
    i++
}

let isRun = arr.length != 0
// let isRun = true
while(!isRun) 
    console.log('run');
    