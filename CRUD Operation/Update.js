const Connection = require('./connection')

const UpdateBook = async () => {
    const updatedData = await Connection.updateOne({ bookName: "Java Programming" }, { $set: { authorName: "Rhutik" } }, { upsert: true })
    console.log(" Successfully Updated..........")
    console.log(updatedData)
}

module.exports = UpdateBook;