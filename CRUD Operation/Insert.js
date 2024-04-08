const Connection = require("./connection")

const InsertDocument = async () => {
    const data = new Connection({
        bookName: "Java Programming",
        authorName: "BalguruSwami"
    })

    const result = await data.save();
    console.log(result);
}


module.exports = InsertDocument;