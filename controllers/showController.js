const shows = require('../models/show')

const showController = {
    index: (req, res) => {
        shows.find({}).then((showsRes) => {
            console.log(showsRes)
            res.render('fashionshow/show', {showsList: showsRes})
        })
    },
    new: (req, res) => {
        res.render('fashionshow/newshow')
    },
    create: (req, res) => {
        shows.create({
            name: req.body.name,
            date: req.body.date,
            address: req.body.address,
            email: req.body.email,
            flyer: req.body.flyer
        }).then(show => {
            console.log(show)
            res.redirect(`/fashionshows`)
        })
    },
    show: (req, res) => {
        const showId = req.params.id
        shows.findById(showId).then((show) => {
          console.log(showId)
          res.render('fashionshow/viewshow', { show })
        })
      },
    edit: (req, res) => {
        const showId = req.params.id
        // console.log(newslinkId)
        res.render('fashion/editshow', {showId})
    },
    update: (req, res) => {
        const showId = req.params.id
        console.log(req.body)
        showos.findByIdAndUpdate(showId, req.body, {new: true}).then((show) => {
            res.render(`/fashionshows/show`)
        })
    },
    delete: (req, res) => {
        const showId = req.params.id
        shows.findByIdAndRemove(showId).then(() => {
            res.redirect('/fashionshow/show')
        })
    }
}

module.exports = showController
