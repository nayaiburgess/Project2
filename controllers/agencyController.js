const agency = require('../models/agency')

const agencyController = {
    index: (req, res) => {
        agency.find({}).then((agency) => {
            res.render('agency/viewagency', {agency})
        })
    },
    new: (req, res) => {
        res.render("agency/agencyprofile")
    },
    create: (req, res) => {
        console.log(req.body)
        agency.create({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email
        }).then(agency => {
            res.redirect('agencies/fashionshows')
        })
    },
    show: (req, res) => {
        const agencyId = req.params.id
        agency.findById(agencyId).then((agency) => {
          res.render('agency/viewagency', { agency })
        })
      },
    delete: (req, res) => {
        const agencyId = req.params.id
        agency.findByIdAndRemove(agencyId).then(() => {
            res.redirect('/')
        })
    }
}

module.exports = agencyController

