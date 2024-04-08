const Connection = require("./connection")

const fetchedDoc = async () => {
    const book = await Connection.find()
    console.log("Documents from collection.....")
    console.log(book)
}

module.exports = fetchedDoc