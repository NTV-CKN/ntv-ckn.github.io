var xhttp = new XMLHttpRequest();

let count = 1

function getTodoById(callBack, id) {
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callBack(this.responseText)
        } else {
            //callBack(this.status)
        }
    };//callback
    xhttp.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
    xhttp.send();
}

let callMe = (text) => {
    if (typeof text === "number") {
        console.log("Oh shit", '\n');
    }
    else
        console.log("The result is:", text);
    setTimeout(() => {
        getTodoById(callMe, ++count)
    }, 2000)
}

getTodoById((text) => {
    if (typeof text === "number")
        console.log("Oh shit1");
    else
        console.log("The result is1:", text);
}, 2)

setTimeout(() => {
    getTodoById(callMe, count)
}, 2000)
