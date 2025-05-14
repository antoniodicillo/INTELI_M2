const express = require('express');
const router = express.Router();
const home = require('../controllers/homeController');
const event = require('../controllers/eventController');
const account = require('../controllers/accountController');
const accountEvents = require('../controllers/accountEventController');

// Rota principal
router.get('/', home.index);

// Rota dos eventos
router.get('/event', event.index);

// Rota da conta
router.get('/account', account.index);

// Rota dos eventos da conta
router.get('/account/events', accountEvents.index);

module.exports = router;