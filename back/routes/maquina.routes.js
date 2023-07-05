const express = require('express');
const router = express.Router();

const maquinaController = require('../controllers/maquina.controller');

// Rutas para las máquinas
router.get('/maquinas', maquinaController.getAllMaquinas);
router.get('/maquinas/:id', maquinaController.getAllMaquinas);
router.post('/maquinas', maquinaController.createMaquina);

module.exports = router;