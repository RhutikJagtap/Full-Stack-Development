//Routing
const express = require("express");
const app = express();
const port = 3000

// http://localhost:3000/
app.get("/", (req, res) => {
    res.send("<h2>Welcome to My Home Page</h2>");
});

//http://localhost:3000/about
app.get("/about", (req, res) => {
    res.send("<h2>Welcome to My About Page</h2>");
});

// http://localhost:3000/contact
app.get("/contact", (req, res) => {
    res.send("<h2>Welcome to My Contact Page</h2>");
});


app.listen(port, () => {
    console.log(`Listining to the port Number ${port} `);
})