const agency = require('../models/agency')

const agencyController = {
    index: (req, res) => {
        agency.find({}).then((agency) => {
            res.render('views/agency', {agency})
        })
    },
    new: (req, res) => {
        res.render("views/newagency")
    },
    create: (req, res) => {
        console.log(req.body)
        agency.create({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email
        }).then(agency => {
            res.redirect('/agencies')
        })
    },
    show: (req, res) => {
        const agencyId = req.params.id
        agency.findById(agencyId).then((agency) => {
          console.log(agency)
          res.render('views/agency', { agency })
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

