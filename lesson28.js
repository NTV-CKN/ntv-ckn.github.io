 var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        JSON
        let data = JSON.parse(this.responseText)
        let stringData = JSON.stringify(data)
        console.log("Result OK", data, stringData);
    }
};//callback
xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xhttp.send();

