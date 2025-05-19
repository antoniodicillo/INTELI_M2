const express = require('express');
const router = express.Router();
const controller = require('../controllers/eventsController');

router.post('/', controller.create);


module.exports = router;