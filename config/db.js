const mongoose = require("mongoose")
const MONGO_URI = 'mongodb+srv://Uday:MqKT6VMJVYox5vh5@attainurgoal.hhhxh.mongodb.net/employeedb?retryWrites=true&w=majority'

exports.connectDB = ()=>{
    mongoose.connect(MONGO_URI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    const db = mongoose.connection
    db.on('error', ()=>console.log("Error in Connection"))
    db.once('open', ()=>console.log("Connection Successful"))
}
