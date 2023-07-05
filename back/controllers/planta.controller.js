const Planta = require('../models/Planta');

// Obtener todas las plantas
const getAllPlantas = async (req, res) => {
  try {
    const plantas = await Planta.find();
    console.log(plantas);
    res.json(plantas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las plantas' });
  }
};

// Crear una nueva planta
const createPlanta = async (req, res) => {
  try {
    const planta = new Planta(req.body);
    await planta.save();
    res.status(201).json(planta);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear la planta' });
  }
};

// Exportar los controladores
module.exports = {
  getAllPlantas,
  createPlanta
};