const mongoose = require('mongoose');

const maquinaReemplazoSchema = new mongoose.Schema({
  maquina: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Maquina', required: true },
  maquinaReemplazo: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Maquina', required: true }
});

const MaquinaReemplazo = mongoose.model('MaquinaReemplazo', maquinaReemplazoSchema);

module.exports = MaquinaReemplazo;
