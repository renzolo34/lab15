const MaquinaTecnico = require('../models/MaquinaTecnico');

// Asignar un técnico a una máquina
const asignarTecnico = async (req, res) => {
  try {
    const { maquinaId, tecnicoId, fechaInicio, fechaFin, turno } = req.body;

    const maquinaTecnico = new MaquinaTecnico({
      maquina: maquinaId,
      tecnico: tecnicoId,
      fechaInicio,
      fechaFin,
      turno
    });

    await maquinaTecnico.save();

    res.status(201).json(maquinaTecnico);
  } catch (error) {
    res.status(400).json({ error: 'Error al asignar el técnico a la máquina' });
  }
};

// Exportar los controladores
module.exports = {
  asignarTecnico
};
