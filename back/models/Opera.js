const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const operacionSchema = new Schema({
  maquina: { type: Schema.Types.ObjectId, ref: 'Maquina', required: true },
  tecnico: { type: Schema.Types.ObjectId, ref: 'Tecnico', required: true },
  turno: { type: String, enum: ['mañana', 'tarde', 'noche'], required: true },
  periodo: {
    fechaInicio: { type: Date, required: true },
    fechaFin: { type: Date, required: true }
  }
});

const Operacion = mongoose.model('Operacion', operacionSchema);

module.exports = Operacion;
