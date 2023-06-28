const express = require('express');
const mongoose = require('mongoose');
const pdfMake = require('pdfmake');

// Conexión a la base de datos
mongoose.connect('mongodb://127.0.0.1/tu-base-de-datos', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

// Configuración de Express
const app = express();
app.use(express.json());
// Definir los esquemas y modelos de la base de datos
const plantaSchema = new mongoose.Schema({
    color: {
      type: String,
      required: true,
    },
    superficie: {
      type: Number,
      required: true,
    },
    procesos: [{
      nombre: {
        type: String,
        required: true,
      },
      gradoComplejidad: {
        type: Number,
        required: true,
      },
    }],
  });
  
const Planta = mongoose.model('Planta', plantaSchema);

// Crear una nueva planta
app.post('/plantas', (req, res) => {
    const plantaData = req.body;
  
    Planta.create(plantaData)
      .then((planta) => {
        res.status(201).json(planta);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al crear la planta' });
      });
  });
  
  // Obtener todas las plantas
  app.get('/plantas', (req, res) => {
    Planta.find()
      .then((plantas) => {
        res.json(plantas);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al obtener las plantas' });
      });
  });
  
  // Obtener una planta por ID
  app.get('/plantas/:id', (req, res) => {
    const plantaId = req.params.id;
  
    Planta.findById(plantaId)
      .then((planta) => {
        if (planta) {
          res.json(planta);
        } else {
          res.status(404).json({ error: 'Planta no encontrada' });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al obtener la planta' });
      });
  });
  
  // Actualizar una planta
  app.put('/plantas/:id', (req, res) => {
    const plantaId = req.params.id;
    const plantaData = req.body;
  
    Planta.findByIdAndUpdate(plantaId, plantaData, { new: true })
      .then((planta) => {
        if (planta) {
          res.json(planta);
        } else {
          res.status(404).json({ error: 'Planta no encontrada' });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al actualizar la planta' });
      });
  });
  
  // Eliminar una planta
  app.delete('/plantas/:id', (req, res) => {
    const plantaId = req.params.id;
  
    Planta.findByIdAndRemove(plantaId)
      .then((planta) => {
        if (planta) {
          res.json({ message: 'Planta eliminada exitosamente' });
        } else {
          res.status(404).json({ error: 'Planta no encontrada' });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al eliminar la planta' });
      });
  });
  
const tecnicoSchema = new mongoose.Schema({
    dni: {
      type: String,
      unique: true,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    fechaNacimiento: {
      type: Date,
      required: true,
    },
    telefonos: [{
      tipo: {
        type: String,
        required: true,
      },
      numero: {
        type: String,
        required: true,
      },
    }],
  });
  
const Tecnico = mongoose.model('Tecnico', tecnicoSchema);

// Crear un nuevo técnico
app.post('/tecnicos', (req, res) => {
    const tecnicoData = req.body;
  
    Tecnico.create(tecnicoData)
      .then((tecnico) => {
        res.status(201).json(tecnico);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al crear el técnico' });
      });
  });
  
  // Obtener todos los técnicos
  app.get('/tecnicos', (req, res) => {
    Tecnico.find()
      .then((tecnicos) => {
        res.json(tecnicos);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al obtener los técnicos' });
      });
  });
  
  // Obtener un técnico por ID
  app.get('/tecnicos/:id', (req, res) => {
    const tecnicoId = req.params.id;
  
    Tecnico.findById(tecnicoId)
      .then((tecnico) => {
        if (tecnico) {
          res.json(tecnico);
        } else {
          res.status(404).json({ error: 'Técnico no encontrado' });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al obtener el técnico' });
      });
  });
  
  // Actualizar un técnico
  app.put('/tecnicos/:id', (req, res) => {
    const tecnicoId = req.params.id;
    const tecnicoData = req.body;
  
    Tecnico.findByIdAndUpdate(tecnicoId, tecnicoData, { new: true })
      .then((tecnico) => {
        if (tecnico) {
          res.json(tecnico);
        } else {
          res.status(404).json({ error: 'Técnico no encontrado' });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al actualizar el técnico' });
      });
  });
  
  // Eliminar un técnico
  app.delete('/tecnicos/:id', (req, res) => {
    const tecnicoId = req.params.id;
  
    Tecnico.findByIdAndRemove(tecnicoId)
      .then((tecnico) => {
        if (tecnico) {
          res.json({ message: 'Técnico eliminado exitosamente' });
        } else {
          res.status(404).json({ error: 'Técnico no encontrado' });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al eliminar el técnico' });
      });
  });
  
  const maquinaSchema = new mongoose.Schema({
    numero: {
      type: Number,
      unique: true,
      required: true,
    },
    marca: {
      type: String,
      required: true,
    },
    modelo: {
      type: String,
      required: true,
    },
    planta: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Planta',
    },
    asignaciones: [{
      tecnico: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tecnico',
      },
      fechaInicio: {
        type: Date,
        required: true,
      },
      fechaFin: {
        type: Date,
      },
      turno: {
        type: String,
        enum: ['mañana', 'tarde', 'noche'],
        required: true,
      },
    }],
    maquinaReemplazo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Maquina',
    },
  });
  
const Maquina = mongoose.model('Maquina', maquinaSchema);

// Crear una nueva máquina
app.post('/maquinas', (req, res) => {
    const maquinaData = req.body;
  
    Maquina.create(maquinaData)
      .then((maquina) => {
        res.status(201).json(maquina);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al crear la máquina' });
      });
  });
  
  // Obtener todas las máquinas
  app.get('/maquinas', (req, res) => {
    Maquina.find()
      .populate('planta', 'color superficie')
      .populate('asignaciones.tecnico', 'dni nombre apellido')
      .populate('maquinaReemplazo', 'numero')
      .then((maquinas) => {
        res.json(maquinas);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al obtener las máquinas' });
      });
  });
  
  // Obtener una máquina por ID
  app.get('/maquinas/:id', (req, res) => {
    const maquinaId = req.params.id;
  
    Maquina.findById(maquinaId)
      .populate('planta', 'color superficie')
      .populate('asignaciones.tecnico', 'dni nombre apellido')
      .populate('maquinaReemplazo', 'numero')
      .then((maquina) => {
        if (maquina) {
          res.json(maquina);
        } else {
          res.status(404).json({ error: 'Máquina no encontrada' });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al obtener la máquina' });
      });
  });
  
  // Actualizar una máquina
  app.put('/maquinas/:id', (req, res) => {
    const maquinaId = req.params.id;
    const maquinaData = req.body;
  
    Maquina.findByIdAndUpdate(maquinaId, maquinaData, { new: true })
      .then((maquina) => {
        if (maquina) {
          res.json(maquina);
        } else {
          res.status(404).json({ error: 'Máquina no encontrada' });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al actualizar la máquina' });
      });
  });
  
  // Eliminar una máquina
  app.delete('/maquinas/:id', (req, res) => {
    const maquinaId = req.params.id;
  
    Maquina.findByIdAndRemove(maquinaId)
      .then((maquina) => {
        if (maquina) {
          res.json({ message: 'Máquina eliminada exitosamente' });
        } else {
          res.status(404).json({ error: 'Máquina no encontrada' });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al eliminar la máquina' });
      });
  });

// Ruta para generar el PDF de los técnicos
app.get('/tecnicos/pdf', (req, res) => {
    Tecnico.find()
      .then((tecnicos) => {
        // Crear un array de objetos con los datos de los técnicos
        const data = tecnicos.map((tecnico) => ({
          DNI: tecnico.dni,
          Nombre: tecnico.nombre,
          Apellido: tecnico.apellido,
          Fecha_Nacimiento: tecnico.fechaNacimiento.toISOString().substring(0, 10),
          Telefonos: tecnico.telefonos.map((telefono) => `${telefono.tipo}: ${telefono.numero}`),
        }));
  
        // Definir la estructura del documento PDF
        const docDefinition = {
          content: [
            { text: 'Lista de Técnicos', style: 'header' },
            { text: ' ', style: 'subheader' },
            {
              table: {
                headerRows: 1,
                body: [
                  Object.keys(data[0]), // Encabezado de las columnas
                  ...data.map(Object.values), // Contenido de las filas
                ],
              },
            },
          ],
          styles: {
            header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
            subheader: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] },
          },
        };
  
        // Generar el documento PDF
        const pdfDoc = pdfMake.createPdf(docDefinition);
  
        // Enviar el PDF como respuesta al cliente
        pdfDoc.getBase64((data) => {
          res.writeHead(200, {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment;filename=tecnicos.pdf',
          });
          const buffer = Buffer.from(data.toString('utf-8'), 'base64');
          res.end(buffer);
        });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al obtener los técnicos' });
      });
  });
  
// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
