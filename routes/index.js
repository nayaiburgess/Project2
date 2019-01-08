const express = require('express')
const router = express.Router()
const runwayModelController = require('../controllers/runwayModelController')
const agencyController = require('../controllers/agencyController')
const landingController = require('../controllers/landingController')

router.get('/', landingController.index)


module.exports = router