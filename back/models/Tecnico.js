const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tecnicoSchema = new Schema({
  dni: { type: String, unique: true, required: true },
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  telefonos: [String]
});

const Tecnico = mongoose.model('Tecnico', tecnicoSchema);

module.exports = Tecnico;
