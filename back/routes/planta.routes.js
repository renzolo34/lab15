const express = require('express');
const router = express.Router();

const plantaController = require('../controllers/planta.controller');

// Rutas para las plantas
router.get('/plantas', plantaController.getAllPlantas);
router.post('/plantas', plantaController.createPlanta);
module.exports = router;
