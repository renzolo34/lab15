const express = require('express');
const router = express.Router();
const operacionController = require('../controllers/opera.controller');

// Ruta para crear una nueva operacion
router.post('/operaciones', operacionController.createOperacion);

// Ruta para obtener todas las operaciones
router.get('/operaciones', operacionController.getAllOperaciones);


module.exports = router;
