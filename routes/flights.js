var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights.js')
/* GET users listing. */
router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new);

// router.

module.exports = router;