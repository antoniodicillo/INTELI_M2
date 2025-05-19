const express = require('express');
const router = express.Router();
const controller = require('../controllers/signupController');

// Rota principal
router.get('/', controller.index);

module.exports = router;