import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
const uri = 'mongodb://localhost:27017/restaurante';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Conexión exitosa a MongoDB');
    })
    .catch((err) => {
        console.error('Error al conectar a MongoDB:', err);
    });

// Esquema de Clientes
const clientesSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    nombre: { type: String },
    email: { type: String, unique: true },
    direccion: { type: String },
    fecha_registro: { type: Date, default: Date.now },
    historial_pedidos: { type: mongoose.Schema.Types.Mixed, default: [] },
});

const Cliente = mongoose.model('Cliente', clientesSchema);

// Ruta para obtener todos los clientes
app.get('/api/clientes', async (req, res) => {
    try {
        const allClientes = await Cliente.find();  // Buscar todos los clientes
        console.log('Clientes obtenidos:', allClientes);  // Log para verificar si los clientes están siendo obtenidos
        res.json(allClientes);  // Responder con los datos obtenidos
    } catch (error) {
        console.error('Error al obtener los clientes:', error);
        res.status(500).json({ message: 'Error al obtener los clientes' });
    }
});

// Servir archivos estáticos (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});


