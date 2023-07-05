const express = require('express');
const router = express.Router();

const tecnicoController = require('../controllers/tecnico.controller');

// Rutas para los técnicos
router.get('/tecnicos', tecnicoController.getAllTecnicos);
router.get('/tecnicos/:id', tecnicoController.getAllTecnicos);
router.post('/tecnicos', tecnicoController.createTecnico);


module.exports = router;