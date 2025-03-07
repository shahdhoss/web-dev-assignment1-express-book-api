const express = require("express");
const {borrowBook,returnBook ,getAllBooks, getBookByGenre, updateBookISBN, deleteBookByName, addBook } = require("../controllers/books");
const router = express.Router()

router.get("/", getAllBooks)
router.get("/:genre", getBookByGenre)
router.put("/update", updateBookISBN)
router.delete("/:name",deleteBookByName)
router.post("/add", addBook)
router.put("/borrow/:name", borrowBook)
router.put("/return/:name", returnBook)

module.exports = router