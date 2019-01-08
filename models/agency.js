const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const agency = new Schema({
    Name: string,
    Phone: number,
    Email: string
})
module.exports = mongoose.model("agency", agency)