const express = require('express');
const router = express.Router();
const controller = require('../controllers/loginController');

// Rota principal
router.get('/', controller.index);

module.exports = router;