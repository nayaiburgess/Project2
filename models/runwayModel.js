const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const runwayModel = new Schema({
    Name: string,
    Age: number,
    Phone: number,
    Email: string,
    Shows: []
})
module.exports = mongoose.model("runwayModel", runwayModel)