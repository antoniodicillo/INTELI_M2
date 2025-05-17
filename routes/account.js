const express = require('express');
const router = express.Router();

const controller = require('../controllers/accountController');
const controllerEvents = require('../controllers/accountEventController');

// Rota da conta
router.get('/', controller.index);

// Rota dos eventos da conta
router.get('/events', controllerEvents.index);

module.exports = router;