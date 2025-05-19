const express = require('express');
const router = express.Router();

const controller = require('../controllers/accountController');
const controllerEvents = require('../controllers/accountEventController');
const controllerCreateEvent = require('../controllers/createEventController');

// Rota da conta
router.get('/', controller.index);

// Rota dos eventos da conta
router.get('/events', controllerEvents.index);

// Rota de criação de eventos
router.get('/create-event', controllerCreateEvent.index);

module.exports = router;