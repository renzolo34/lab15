const MaquinaReemplazo = require('../models/MaquinaReemplazo');

// Obtener todos los reemplazos de máquinas
const obtenerMaquinasReemplazo = async (req, res) => {
  try {
    const maquinasReemplazo = await MaquinaReemplazo.find();
    res.json(maquinasReemplazo);
  } catch (error) {
    res.status(400).json({ error: 'Error al obtener los reemplazos de máquinas' });
  }
};

// Crear un nuevo reemplazo de máquina
const crearMaquinaReemplazo = async (req, res) => {
  try {
    const { maquinaId, maquinaReemplazoId } = req.body;

    const maquinaReemplazo = new MaquinaReemplazo({
      maquina: maquinaId,
      maquinaReemplazo: maquinaReemplazoId
    });

    await maquinaReemplazo.save();

    res.status(201).json(maquinaReemplazo);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el reemplazo de máquina' });
  }
};

// Exportar los controladores
module.exports = {
  obtenerMaquinasReemplazo,
  crearMaquinaReemplazo
};
