const mongoose = require('mongoose')

const URL = "mongodb://localhost:27017/CRUD"

const DBConnection = mongoose.connect((URL)).then(() => {
    console.log("Connection is Successfully....");
    console.log("==============================")
}).catch((err) => {
    console.log(`Errorrrrr in the Connection ${err}`)
})

const BookSchema = new mongoose.Schema(
    {
        bookName:
        {
            type: String,
            unique: true
        },
        authorName:
        {
            type: String,
            unique: true
        }

    }
)


const BookCollection = new mongoose.model("Book", BookSchema)
module.exports = BookCollection;