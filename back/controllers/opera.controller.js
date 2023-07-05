const Operacion = require('../models/Opera');

// Obtener todas las operaciones
const getAllOperaciones = async (req, res) => {
  try {
    const operaciones = await Operacion.find()
      .populate('maquina', 'modelo') // Popula el campo 'maquina' con el nombre de la máquina
      .populate('tecnico', 'nombre') // Popula el campo 'tecnico' con el nombre del técnico
      .select('-__v'); // Excluye el campo '__v' del resultado

    res.json(operaciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las operaciones' });
  }
};

// Crear una nueva operación
const createOperacion = async (req, res) => {
  try {
    const operacion = new Operacion(req.body);
    await operacion.save();
    res.status(201).json(operacion);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear la operación' });
  }
};

// Exportar los controladores
module.exports = {
  getAllOperaciones,
  createOperacion
};
