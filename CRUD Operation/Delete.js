const Connection = require("./connection")

const DeleteDoc = async () => {
    const deletedDoc = await Connection.deleteOne({
        "bookName": "Java Programming"
    })

    console.log("Document delete Successfully......")
}

module.exports = DeleteDoc