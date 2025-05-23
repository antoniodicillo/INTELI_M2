const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const loginController = require('../controllers/loginController');
const signUpController = require('../controllers/signupController');
const eventController = require('../controllers/eventPageController');
const eventApiController = require('../controllers/eventController');
const accountController = require('../controllers/accountController');
const accountEventControllerEvents = require('../controllers/accountEventController');
const accountCreateEventController = require('../controllers/createEventController');

// Rota home
router.get('/home', homeController.index);

// Rota detalhando um evento
router.get('/event/:id', eventController.index);

// Rota de login/signup
router.get('/signup', signUpController.index);
router.get('/login', loginController.index);

// Rotas de api
router.post('/api/create-event', eventApiController.create);
router.post('/api/delete-event/:id', eventApiController.delete);

// Rota da conta
router.get('/account', accountController.index);

// Rota dos eventos da conta
router.get('/account/events', accountEventControllerEvents.index);

// Rota de criação de eventos
router.get('/account/create-event', accountCreateEventController.index);

module.exports = router;