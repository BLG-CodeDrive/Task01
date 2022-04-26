//Dependencies
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()


// Connect to Database MongoDB
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Connected to mongodb")
})


// Routes
const user = require("./routes/user")
app.use("/api", user)


//Server
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`server is listening on url http://localhost:${port}`))