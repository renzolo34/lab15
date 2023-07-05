const Maquina = require('../models/Maquina');

// Obtener todas las máquinas
const getAllMaquinas = async (req, res) => {
  try {
    const maquinas = await Maquina.find()
    .populate('planta');
    res.json(maquinas);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
};

// Crear una nueva máquina
const createMaquina = async (req, res) => {
  try {
    const maquina = new Maquina(req.body);
    await maquina.save();
    res.status(201).json(maquina);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'Error al crear la máquina' });
  }
};

// Exportar los controladores
module.exports = {
  getAllMaquinas,
  createMaquina
};
