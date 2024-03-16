//create a server using http module

//import http Module in Node js
var http = require("http");

//port number
const port = 4000;

//create Server using createServer() method
http.createServer((req, res) => {
    res.write("Hello Server Created Using http Module");
    res.end(); //must end response
}).listen(port);

console.log(`Server Started on port ${port}`)
