var xhttp = new XMLHttpRequest();

function getTodos(callBack) {
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //console.log("Result OK", this.responseText);
            callBack(this.responseText)
        } else {
            callBack(this.status)
        }
    };//callback
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}

let callMe = (text) => {
    if (typeof text === "number")
        console.log("Oh shit");
    else
        console.log("The result is:", text);
}

getTodos(callMe)

