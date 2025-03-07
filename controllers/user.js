const connection = require('../database_connection/connection')

exports.getAllUser = async(req,res)=>{
    const result = await connection.query("select * from users")
    res.json(result['rows'])
}

exports.addUser = async (req, res) =>{
    const {first_name, last_name, birthDate} = req.body
    await connection.query("insert into users (first_name, last_name, dob) values( $1,$2,$3 )", [first_name,last_name,birthDate])
}

exports.updateBirthDate = async (req,res) =>{
    const {first_name, last_name,birthDate} = req.body
    await connection.query("update users set dob = $3 where first_name= $1 and last_name = $2 ", [first_name,last_name,birthDate])
}
exports.deleteUser = async (req, res) =>{
    const {first_name, last_name} = req.body
    await connection.query("delete from users where first_name = $1 and last_name = $2", [first_name,last_name])
}

