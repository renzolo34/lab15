const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const maquinaSchema = new Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  numero: { type: String, unique: true, required: true },
  planta: { type: mongoose.Schema.Types.ObjectId, ref: 'Planta', required: true }
});

const Maquina = mongoose.model('Maquina', maquinaSchema);

module.exports = Maquina;
