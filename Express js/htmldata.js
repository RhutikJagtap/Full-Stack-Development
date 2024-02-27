//How To send HTML Data
const express = require("express")
const app = express()
const port = 3000

//send response as a html data using res.send()
//http://localhost:3000/
app.get("/", (req, res) => {
    res.send("<h2>WELCOME to Home Page</h2>");
});

//send response as html data using res.write()
//http://localhost:3000/new
app.get("/new", (req, res) => {
    res.write("<h2>WELCOME to New Page</h2>");
    res.send();
});



app.listen(port, () => {
    console.log(`Listining on port ${port}`)
})