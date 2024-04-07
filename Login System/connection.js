const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/LoginSystem";

mongoose.connect(url).then((data) => {
    console.log("Connection Successfully ");
}).catch((err) => {
    console.log("Error in the Connection")
})


const LogInSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true

    }
})

const Logincollection = new mongoose.model('login', LogInSchema);

module.exports = Logincollection;
