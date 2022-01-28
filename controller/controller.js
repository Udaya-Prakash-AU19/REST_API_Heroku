const mongoose = require("mongoose")
const booksModel = require("../model/model")
const {connectDB} = require("../config/db")

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
    var collection1 = ""    
    mongoose.connection.db.listCollections().toArray(function(err, collections){
        var result = collections[0].name
        collection1 = result
    })
    
    try{
        const books = await booksModel.find()
        res.send({
            myCollection: collection1,
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