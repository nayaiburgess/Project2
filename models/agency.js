const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const agency = new Schema({
    Name: String,
    Phone: Number,
    Email: String
})
module.exports = mongoose.model("agency", agency)