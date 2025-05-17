const express = require('express');
const router = express.Router();
const controller = require('../controllers/homeController');

// Rota principal
router.get('/', controller.index);

module.exports = router;