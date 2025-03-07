const connection = require("../database_connection/connection")

exports.getAllBooks = async (req,res)=>{
    const result = await connection.query("select * from book")
    res.json(result["rows"])
}

// get book by genre
exports.getBookByGenre = async (req, res) =>{
    const genre = req.params.genre
    const result = await connection.query("select * from book where genre = $1",[genre])
    res.json(result["rows"])
}

//post a new book
exports.addBook = async (req,res) =>{
    const {name,author,isbn,published_year,genre} = req.body
    await connection.query("insert into book (name,author,isbn,published_year,genre) values ( $1, $2, $3, $4, $5 )",
        [name, author,isbn,published_year,genre])
}


//update a books isbn
exports.updateBookISBN = async (req,res) =>{
    const {name, isbn} = req.body
    await connection.query("update book set ISBN = $1 where name = $2", [isbn,name])
}

//delete a book
exports.deleteBookByName = async (req,res) =>{
    const name = req.params.name
    await connection.query("delete from book where name = $1", [name])
}

exports.borrowBook = async (req, res) =>{
    const book_name = req.params.name
    const result = await connection.query("select is_available from book where name = $1", [book_name])
    if (result.rows[0].is_available == true){
        await connection.query("update book set is_available = False where name = $1", [book_name])
        res.json("book has been borrowed")
    }
    else{
        res.json("book is unavailable")
    }
}

exports.returnBook = async (req,res)=>{
    const book_name = req.params.name
    const result = await connection.query("select is_available from book where name = $1", [book_name])
    if (result.rows[0].is_available == false){
        await connection.query("update book set is_available = True where name = $1", [book_name])
        res.json("book has been returned")
    }
    else{
        res.json("book isn't even borrowed")
    }
}


