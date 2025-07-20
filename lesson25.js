var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log("Result OK", this.responseText);
    }
};//callback
xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xhttp.send();