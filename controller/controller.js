const books = require("../model/model")
const booksModel = require("../model/model")

exports.createBooks = async (req, res)=>{
    const body = req.body
    try{
        const book = await booksModel.create(body)
        res.send({
            data: book,
            status: "success"

        })
    }
    catch(err){
        res.send({
            data: "No data",
            status: "Fail"
        })
    }
}

exports.findBooks = async (req, res)=>{
    try{
        const books = await booksModel.find()
        res.send({
            data: books,
            status: "success"

        })
    }
    catch(err){
        res.send({
            data: "No data",
            status: "Fail"
        })
    }
}

exports.findBookByBookName = async (req, res)=>{
    const bookName = req.params.bookName
    try{
        const book = await booksModel.findOne({bookName: bookName})
        res.send({
            data: book,
            status: "success"

        })
    }
    catch(err){
        res.send({
            data: "No data",
            status: "Fail"
        })
    }
}

exports.updateBook = async (req, res)=>{
    const bookName = req.params.bookName
    const body = req.body
    try{
        const book = await booksModel.updateOne({bookName: bookName},body)
        res.send({
            data: book,
            status: "success"

        })
    }
    catch(err){
        res.send({
            data: "No data",
            status: "Fail"
        })
    }
}

exports.deleteBook = async (req, res)=>{
    const bookName = req.params.bookName
    try{
        const book = await booksModel.findOneAndRemove(bookName)
        res.send({
            data: book,
            status: "success"

        })
    }
    catch(err){
        res.send({
            data: "No data",
            status: "Fail"
        })
    }
}