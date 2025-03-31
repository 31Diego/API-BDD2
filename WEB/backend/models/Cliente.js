import mongoose from 'mongoose';

const ClienteSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    nombre: String,
    email: { type: String, unique: true },
    direccion: String,
    fecha_registro: { type: Date, default: Date.now }
});

export default mongoose.model('Cliente', ClienteSchema);
