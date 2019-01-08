const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const show = new Schema({
    Name: string,
    Date: string,
    Address: string,
    Email: string,
    Flyer: string
})
module.exports = mongoose.model("show", show)