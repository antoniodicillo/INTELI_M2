const express = require('express');
const router = express.Router();
const home = require('../controllers/homeController');
const event = require('../controllers/eventController');


// Rota principal
router.get('/', home.index);

// Rota dos eventos
router.get('/event', event.index);

module.exports = router;