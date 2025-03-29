CREATE DATABASE restaurante;
USE restaurante;

-- Tabla de Empleados
CREATE TABLE empleados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    puesto VARCHAR(50),
    salario DECIMAL(10,2),
    contratado_el DATE
);

-- Insertar empleados
INSERT INTO empleados (nombre, puesto, salario, contratado_el) VALUES
('Luis Fernández', 'Cocinero', 1500.00, '2023-05-12'),
('Ana Gómez', 'Mesera', 1200.00, '2022-10-08'),
('Pedro Ramírez', 'Cajero', 1100.00, '2024-01-20');
