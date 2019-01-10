const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Agency = new Schema({
    name: String,
    phone: Number,
    email: String
})
module.exports = mongoose.model("Agency", Agency)