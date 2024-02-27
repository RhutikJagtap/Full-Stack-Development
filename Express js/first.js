//Introduction  to Express Js

//require() is a node.js function used to load the external modules.
const express = require("express");

//object of an express module is created
const app = express();
//port number
const port = 3000

//http://localhost:3000/
app.get("/", (req, res) => {
    res.send("Hello World From the RJ!")
})

//server listening at port 4000 for any request.
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
