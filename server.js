const express = require("express")
const app = express()
const booksRouter = require("./routes/booksRouter")
const authorRouter = require("./routes/authorRouter")
const userRouter = require("./routes/usersRouter")
app.use(express.json())

app.use((req,res,next)=>{
    if (req.headers['authorization'] != 'Bearer ZEWAIL' ){
        return res.send("You are not authenticated")
    }else{
        next()
    }
})

app.use('/books',booksRouter)
app.use('/authors', authorRouter)
app.use("/users", userRouter)

app.listen(5000)