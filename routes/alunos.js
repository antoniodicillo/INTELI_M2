const express = require('express');
const router = express.Router();
const controller = require('../controllers/alunoController');

router.get('/', controller.index);
router.get('/curso/:curso_id', controller.byCurso);
router.post('/', controller.store);
router.post('/edit/:id', controller.update);
router.post('/delete/:id', controller.destroy);

module.exports = router;