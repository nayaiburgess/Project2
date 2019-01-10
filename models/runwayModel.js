const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const RunwayModel = new Schema({
    name: String,
    age: Number,
    phone: Number,
    email: String,
    shows: []
})
module.exports = mongoose.model("RunwayModel", RunwayModel)