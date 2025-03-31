import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const uri = 'mongodb://localhost:27017/restaurante';

// Conectando a la base de datos
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión exitosa a la base de datos.'))
    .catch(err => {
        console.log('Error al conectar con la base de datos:', err);
        process.exit(0);
    });

// Definiendo el esquema y modelo de clientes (lo mismo que ya tienes)
const clientesSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    nombre: { type: String },
    email: { type: String, unique: true },
    direccion: { type: String },
    fecha_registro: { type: Date, default: Date.now },
    historial_pedidos: { type: mongoose.Schema.Types.Mixed, default: [] }
});

const Cliente = mongoose.model('clientes', clientesSchema);

// Endpoint para obtener todos los clientes
app.get('/clientes', async (req, res) => {
    try {
        const clientes = await Cliente.find();  // Obtener todos los clientes
        res.json(clientes);  // Enviar los datos como respuesta
    } catch (error) {
        console.log('Error al obtener clientes:', error);
        res.status(500).json({ error: 'Error al obtener clientes' });
    }
});

// Iniciar el servidor
app.listen(5000, () => {
    console.log('Servidor corriendo en http://localhost:5000');
});
