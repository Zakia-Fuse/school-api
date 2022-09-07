const books = require("../books")


//get all books
const getBooks = (req, res) => {
    res.status(200).json(books);
}

module.exports={getBooks}