const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const show = new Schema({
    Name: String,
    Date: String,
    Address: String,
    Email: String,
    Flyer: String
})
module.exports = mongoose.model("show", show)