//How to send JSON Data
const { json } = require("body-parser");
const express = require("express")
const app = express();
const port = 3000

//first way we can pass object or array in res.send()
//http://localhost:3000/
app.get("/", (req, res) => {
    res.send({
        "Roll  Number": 15452,
        "name": "RJ"
    });
});

//second way res.json() method  also convert non objects 
//http://localhost:3000/json
app.get("/json", (req, res) => {
    res.json({
        "title": "Welcome to about Page",
        "name": "Rhutik Jagtap",
        "Address": "Kolgaon",
        "status": "Full Stack Java Developer",
        "skills": {
            "frontend": ["HTML", "CSS", "JavaScript"],
            "Programming Languages": ["C", "Java", "Python"],
            "database": ["MySQL", "MongoDB"]
        }
    });
})

app.listen(port, () => {
    console.log(`Listining on Port ${port}`);
})
