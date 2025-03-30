
import mongoose from 'mongoose';
import { getdata } from './api.js';
const { Schema, model } = mongoose;
let uri = 'mongodb://localhost:27017/restaurante';
//trayendo la data del api
const query = await getdata().then(data => {
    //console.log(data);
    return data;
}).catch(error => {
    console.log('no va');
    process.exit(0);
});
//console.log(query);
// conectando a la bd
const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};

mongoose.connect(uri, options).then(
    () => {
        console.log('se ha conectado exitosamente')
    },
    err => {
        console.log('no se ha podido conectar');
        process.exit(0);
    });

const pedidosSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    id_cliente: { type: Number },
    id_producto: { type: Number },
    cantidad: { type: Number },
    total: { type: Number },
    fecha_pedido: { type: Date, default: Date.now },
    estado: { 
        type: String, 
        enum: ['Pendiente', 'En preparación', 'Entregado', 'Cancelado'], 
        default: 'Pendiente' 
    },
});
let pedidos = new mongoose.model('pedidos', pedidosSchema);

    let inserted_c = await pedidos.insertMany(query.pedidos);
    

// definiendo schemas y modelos en mongoose










console.log(query.course);
try {
   
    
    //console.log(inserted_a);
    process.exit(0);
} catch (e) {
    console.log('Some error');
    console.log(e);
    process.exit(0);
}

