const shows = require('../models/show')

const showController = {
    indexModels: (req, res) => {
        shows.find({}).then((showsRes) => {
            res.render('fashionshow/modelshow', {showsList: showsRes})  
        })
    },
    indexAgencies: (req, res) => {
        shows.find({}).then((showsRes) => {
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
            res.redirect(`/agencies/fashionshows`)
        })
    },
    show: (req, res) => {
        const showId = req.params.id
        shows.findById(showId).then((show) => {
          res.render('fashionshow/viewshow', { show })
        })
      },
    edit: (req, res) => {
        const showId = req.params.id
        // console.log(newslinkId)
        res.render('fashionshow/editshow', {showId})
    },
    update: (req, res) => {
        const showId = req.params.id
        shows.findByIdAndUpdate(showId, req.body, {new: true}).then((show) => {
            res.redirect(`/agencies/fashionshows`)
        })
    },
    delete: (req, res) => {
        const showId = req.params.id
        shows.findByIdAndRemove(showId).then(() => {
            res.redirect('/agencies/fashionshows')
        })
    }
}

module.exports = showController
