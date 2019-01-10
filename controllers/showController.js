const shows = require('../models/show')

const showController = {
    index: (req, res) => {
        shows.find({}).then((shows) => {
            res.render('views/show', {shows})
        })
    },
    new: (req, res) => {
        res.render("views/newshow")
    },
    create: (req, res) => {
        console.log(req.body)
        shows.create({
            name: req.body.name,
            date: req.body.date,
            address: req.body.address,
            email: req.body.email,
            flyer: req.body.flyer
        }).then(shows => {
            res.redirect('/fashionshows')
        })
    },
    show: (req, res) => {
        const showId = req.params.id
        shows.findById(showId).then((show) => {
          console.log(show)
          res.render('views/show', { show })
        })
      },
    edit: (req, res) => {
        const showId = req.params.id
        // console.log(newslinkId)
        res.render('view/editshow', {showId})
    },
    update: (req, res) => {
        const showId = req.params.id
        console.log(req.body)
        showos.findByIdAndUpdate(showId, req.body, {new: true}).then((show) => {
            res.redirect(`/fashionshows/:id`)
        })
    },
    delete: (req, res) => {
        const showId = req.params.id
        shows.findByIdAndRemove(showId).then(() => {
            res.redirect('/modelprofile/:id')
        })
    }
}

module.exports = showController
