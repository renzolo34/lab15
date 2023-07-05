const Tecnico = require('../models/Tecnico');

// Obtener todos los técnicos
const getAllTecnicos = async (req, res) => {
  try {
    const tecnicos = await Tecnico.find();
    res.json(tecnicos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los técnicos' });
  }
};

// Crear un nuevo técnico
const createTecnico = async (req, res) => {
  try {
    const tecnico = new Tecnico(req.body);
    await tecnico.save();
    res.status(201).json(tecnico);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el técnico' });
  }
};

// Exportar los controladores
module.exports = {
  getAllTecnicos,
  createTecnico
};
