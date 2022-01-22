const express = require("express")
const app = express()
const PORT = process.env.PORT || 3500
const router = require("../router/routes")
const {connectDB} = require("../config/db")

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', router)


app.listen(PORT, ()=>console.log("Server started at " + PORT))
