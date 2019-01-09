const shows = require('../models/show')

const showController = {
    index: (req, res) => {
        shows.find({}).then((shows) => {
            res.send(shows)
        })
    }
}

module.exports = showController