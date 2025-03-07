const express = require("express")
const {getAllAuthors, getAuthorsByBirthDate} = require("../controllers/authors")
const router = express.Router()

router.get('/', getAllAuthors)
router.get('/:birthDate', getAuthorsByBirthDate)

module.exports = router