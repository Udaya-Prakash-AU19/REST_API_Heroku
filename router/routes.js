const express = require("express")
const router = express.Router()
const {createBooks,
    findBooks,
    findBookByBookName,
    updateBook,
    deleteBook} = require("../controller/controller")


router.post('/', createBooks)
router.get('/', findBooks)
router.get('/:bookName', findBookByBookName)
router.put('/:bookName', updateBook)
router.delete('/:bookName', deleteBook)


module.exports = router
