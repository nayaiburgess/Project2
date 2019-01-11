const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const RunwayModel = new Schema({
    name: String,
    age: Number,
    phone: Number,
    email: String
})
module.exports = mongoose.model("RunwayModel", RunwayModel)