const mongoose = require('mongoose');

const maquinaTecnicoSchema = new mongoose.Schema({
  maquina: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Maquina', required: true },
  tecnico: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Tecnico', required: true },
  fechaAsignacion: { type: Date, required: true },
  turno: { type: String, required: true }
});

const MaquinaTecnico = mongoose.model('MaquinaTecnico', maquinaTecnicoSchema);

module.exports = MaquinaTecnico;
