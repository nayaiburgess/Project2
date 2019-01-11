const model = require('../models/runwayModel')

const runwayModelController = {
    index: (req, res) => {
        model.find({}).then((model) => {
            res.render('models/viewmodel', {model})
        })
    },
    new: (req, res) => {
        res.render("models/modelprofile")
    },
    create: (req, res) => {
        console.log(req.body)
        model.create({
            name: req.body.name,
            age: req.body.age,
            phone: req.body.phone,
            email: req.body.email,
            shows: []
        }).then(model => {
            res.redirect('model/fashionshows')
        })
    },
    show: (req, res) => {
        const modelId = req.params.id
        model.findById(modelId).then((model) => {
          console.log(model)
          res.render('models/viewmodel', { model })
        })
      },
    delete: (req, res) => {
        const modelId = req.params.id
        model.findByIdAndRemove(modelId).then(() => {
            res.redirect('/')
        })
    }
}

module.exports = runwayModelController