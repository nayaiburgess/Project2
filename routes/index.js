const express = require('express')
const router = express.Router()
const runwayModelController = require('../controllers/runwayModelController')
const agencyController = require('../controllers/agencyController')
const landingController = require('../controllers/landingController')
const showController = require('../controllers/showController')

router.get('/', landingController.index)
router.get('/shows', showController.index)






module.exports = router