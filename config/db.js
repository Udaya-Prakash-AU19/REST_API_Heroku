const dotenv = require("dotenv")
dotenv.config()

const mongoose = require("mongoose")

exports.connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    const db = mongoose.connection
    db.on('error', ()=>console.log("Error in Connection"))
    db.once('open', ()=>console.log("Connection Successful"))
}
