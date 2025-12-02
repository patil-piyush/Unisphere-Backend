const mongoose = require('mongoose')
const User = require("../models/user")

function connectDB(url) {
    return mongoose.connect(url)
        .then(() => {console.log("Database Connected Successfully!!")})
        .catch((err) => {console.log("Error Connecting Database...: "), err})
}

module.exports = { connectDB }