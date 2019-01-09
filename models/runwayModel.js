const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const runwayModel = new Schema({
    Name: String,
    Age: Number,
    Phone: Number,
    Email: String,
    Shows: []
})
module.exports = mongoose.model("runwayModel", runwayModel)