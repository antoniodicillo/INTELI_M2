const express = require('express');
const router = express.Router();
const controller = require('../controllers/eventController');

// Rota principal
router.get('/:id', controller.index);


module.exports = router;