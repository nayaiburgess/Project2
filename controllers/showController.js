const show = require('../models/show')

const showController = {
    index: (req, res) => {
        Car.find({}).then((show) => {
            res.send(show)
        })
    }
}

module.exports = showController