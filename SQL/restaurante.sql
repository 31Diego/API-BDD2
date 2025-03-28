-- Crear la base de datos
CREATE DATABASE restaurante;
USE restaurante;

-- Tabla de Clientes con JSON (historial de pedidos)
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    direccion TEXT,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    historial_pedidos JSON  -- Almacena historial de compras en formato JSON
);


-- Insertar clientes con historial de pedidos en JSON
INSERT INTO clientes (nombre, email, direccion, historial_pedidos) VALUES
('Juan Pérez', 'juanperez@email.com', 'Calle Falsa 123, Madrid',
    '[{"producto": "Pizza Margarita", "cantidad": 2, "total": 17.98}, 
      {"producto": "Coca-Cola", "cantidad": 1, "total": 2.00}]'),
('María López', 'maria.lopez@email.com', 'Avenida Central 45, Barcelona',
    '[{"producto": "Tarta de Chocolate", "cantidad": 1, "total": 4.99}]');