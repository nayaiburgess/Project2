const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Show = new Schema({
    name: String,
    date: String,
    address: String,
    email: String,
    flyer: String
})
module.exports = mongoose.model("Show", Show)