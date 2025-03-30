import mongoose from 'mongoose';
import { getdata } from './api.js';
const { Schema, model } = mongoose;

let uri = 'mongodb://localhost:27017/restaurante';

// Trayendo la data del API
const query = await getdata().then(data => {
    return data;
}).catch(error => {
    console.log('Error al obtener datos del API:', error);
    process.exit(0);
});

// Conectando a la base de datos
const options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
};

mongoose.connect(uri, options).then(
    () => { console.log('Conexión exitosa a la base de datos.'); },
    err => { console.log('No se ha podido conectar a la base de datos:', err); process.exit(0); }
);

// Definiendo esquemas y modelos en Mongoose
const clientesSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    nombre: { type: String },
    email: { type: String, unique: true },
    direccion: { type: String },
    fecha_registro: { type: Date, default: Date.now },
    historial_pedidos: { type: Schema.Types.Mixed, default: [] }
});
clientesSchema.index({ email: 1 }); // Índice para email

const empleadosSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    nombre: { type: String },
    puesto: { type: String },
    salario: { type: String },
    contratado_el: { type: Date, default: Date.now }
});
empleadosSchema.index({ id: 1 }); // Índice para id de empleados

const pedidosSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    id_cliente: { type: Number, ref: 'clientes' },
    id_producto: { type: Number, ref: 'productos' },
    cantidad: { type: Number },
    total: { type: Number },
    fecha_pedido: { type: Date, default: Date.now },
    estado: {
        type: String,
        enum: ['Pendiente', 'En preparación', 'Entregado', 'Cancelado'],
        default: 'Pendiente'
    },
});
pedidosSchema.index({ estado: 1 }); // Índice para estado de los pedidos

const productosSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    nombre: { type: String },
    descripcion: { type: String },
    precio: { type: Number },
    stock: { type: Number },
    categoria: {
        type: String,
        enum: ['Entrante', 'Plato Principal', 'Postre', 'Bebida'],
        default: 'Entrante'
    },
    disponible: { type: Number },
    ingredientes: { type: Schema.Types.Mixed, default: [] }
});
productosSchema.index({ nombre: 1 }); // Índice para nombre de producto

// Modelos
let clientes = mongoose.model('clientes', clientesSchema);
let empleados = mongoose.model('empleados', empleadosSchema);
let pedidos = mongoose.model('pedidos', pedidosSchema);
let productos = mongoose.model('productos', productosSchema);

// Insertando datos en las colecciones
try {
    let inserted_a = await clientes.insertMany(query.clientes);
    let inserted_b = await empleados.insertMany(query.empleados);
    let inserted_c = await pedidos.insertMany(query.pedidos);
    let inserted_d = await productos.insertMany(query.productos);
    console.log('Datos insertados exitosamente.');
} catch (e) {
    console.log('Error al insertar datos:', e);
    process.exit(0);
}

// Ejemplo de agregación para obtener productos más vendidos
const productosMasVendidos = await pedidos.aggregate([
    { $group: { _id: "$id_producto", totalVendido: { $sum: "$total" } } },
    { $sort: { totalVendido: -1 } },
    { $limit: 5 },
    { $lookup: {
        from: "productos",
        localField: "_id",
        foreignField: "id",
        as: "producto_info"
    }},
    { $project: { "producto_info.nombre": 1, "totalVendido": 1, _id: 0 }}
]);

console.log("Productos más vendidos:", productosMasVendidos);

// Ejemplo de agregación para obtener clientes más frecuentes
const clientesMasFrecuentes = await pedidos.aggregate([
    { $group: { _id: "$id_cliente", totalPedidos: { $sum: 1 } } },
    { $sort: { totalPedidos: -1 } },
    { $limit: 5 },
    { $lookup: {
        from: "clientes",
        localField: "_id",
        foreignField: "id",
        as: "cliente_info"
    }},
    { $project: { "cliente_info.nombre": 1, "totalPedidos": 1, _id: 0 }}
]);

console.log("Clientes más frecuentes:", clientesMasFrecuentes);

// Ejemplo de agregación para obtener pedidos por estado
const pedidosPorEstado = await pedidos.aggregate([
    { $group: { _id: "$estado", totalPedidos: { $sum: 1 } } },
    { $sort: { totalPedidos: -1 } }
]);

console.log("Pedidos por estado:", pedidosPorEstado);


