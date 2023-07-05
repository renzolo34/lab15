const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./config/db');
const config = require('./config/global');
const app = express();

db();

app.use(cors());
app.use(express.json());
app.use('/api',require('./routes/maquina.routes'));
app.use('/api', require('./routes/planta.routes'));
app.use('/api',require('./routes/tecnico.routes'));

app.listen(config.port, ()=>{
    console.log("El servidor corriendo en el puerto 4000");
})
