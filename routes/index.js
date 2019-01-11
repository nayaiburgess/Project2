const express = require('express')
const router = express.Router()
const runwayModelController = require('../controllers/runwayModelController')
const agencyController = require('../controllers/agencyController')
const landingController = require('../controllers/landingController')
const showController = require('../controllers/showController')

router.get('/', landingController.index)

router.get('/model/fashionshows', showController.indexModels)// all shows
router.get('/agencies/fashionshows', showController.indexAgencies)// all shows
router.get('/agencies/fashionshows/new', showController.new) // form to new show
router.post('/agencies/fashionshows', showController.create) // posting to list of shows
router.get('/fashionshows/:id/:check', showController.show) //show specifc show
router.get('/fashionshows/:id/editshow', showController.edit) // edit the show
router.patch('/fashionshows/:id', showController.update) // updates the specific show 
router.delete('/:id', showController.delete) // deletes show 

router.get('/modelprofile', runwayModelController.index) // all profiles
router.get('/modelprofile/new', runwayModelController.new) // form to new model profile
router.post('/modelprofile', runwayModelController.create) // post to list of model profiles
router.get('/modelprofile/:id', runwayModelController.show) // show specific profile
router.delete('/modelprofile/:id', runwayModelController.delete) // delete profile

router.get('/agencies', agencyController.index) // all agencies
router.get('/agencies/new', agencyController.new) // form to new agency 
router.post('/agencies', agencyController.create) // post to list of agencies
router.get('/agencies/:id', agencyController.show) // one agency
router.delete('/agencies/:id', agencyController.delete) //delete profile

module.exports = router