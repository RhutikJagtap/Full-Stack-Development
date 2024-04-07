const express = require('express');


const app = express();
const port = 3000

//import collection from connection file
const loginCollection = require('./connection');

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

const invalid = "";


app.get("/", (req, res) => {

    res.render("login", { invalid });
});

app.get("/loginPage", (req, res) => {
    res.render("login", { invalid });
});

app.get("/homePage", (req, res) => {
    res.render("home");
});


app.get("/signupPage", (req, res) => {
    res.render("signup");
});

app.get("/aboutPage", (req, res) => {
    res.render("about");
})


//SignUp Handler
app.post('/save', async (req, res) => {
    const data = {
        username: req.body.uname,
        password: req.body.pwd
    }

    await loginCollection.insertMany([data]);
    res.render('login', { invalid });

});


//Login  Handler
app.post("/loginUser", async (req, res) => {
    try {
        const check = await loginCollection.findOne({ username: req.body.uname }) //this will find document using username
        const username = req.body.uname
        console.log(check)

        if (check.username === req.body.uname && check.password === req.body.pwd) {
            res.render("home", { username });
        } else {
            const invalid = "Wrong  Password";
            res.render("login", { invalid })
        }
    } catch (error) {
        res.send("LogIn detail Not Matched Please Sign UP First")
    }
})



// Server created
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})


