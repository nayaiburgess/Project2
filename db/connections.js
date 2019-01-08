const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/showlink").then(() => {
    console.log("MONGODB is now connected")
})

module.exports = mongoose;