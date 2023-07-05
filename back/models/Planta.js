const mongoose = require('mongoose');

// Definir los esquemas y modelos de la base de datos
const plantaSchema = new mongoose.Schema({
  color: String,
  superficie: Number, 
  proceso: {
    nombre: String,
    grado: String
  }
});

const Planta = mongoose.model('Planta', plantaSchema);

module.exports = Planta;