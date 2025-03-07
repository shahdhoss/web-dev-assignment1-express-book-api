const express = require("express")
const {getAllUser, updateBirthDate,deleteUser,addUser} = require("../controllers/user")
const router = express.Router()

router.get("/", getAllUser)
router.post("/add", addUser)
router.put("/update", updateBirthDate)
router.delete("/delete", deleteUser)

module.exports = router