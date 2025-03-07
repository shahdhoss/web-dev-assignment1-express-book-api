const connection = require("../database_connection/connection")

exports.getAllAuthors = async(req, res)=>{
    const result = await connection.query("select * from authors")
    res.json(result['rows'])  
}

exports.getAuthorsByBirthDate = async (req,res)=>{
    const birthDate = req.params.birthDate
    const result = await connection.query("select * from authors where dob =$1 ",[birthDate])
    res.json(result['rows'])
}