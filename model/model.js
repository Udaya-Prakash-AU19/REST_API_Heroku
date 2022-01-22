const mongoose = require("mongoose")
const booksSchema = mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    ISBN: {
        type: Number,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    publisherName: {
        type: String,
        required: true
    },
    publishedDate: {
        type: Date,
        default: new Date()
    },
    edition: {
        type: Number,
        required: true
    }
})

const books = mongoose.model('books', booksSchema)

module.exports = books
