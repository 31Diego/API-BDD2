CREATE DATABASE restaurante;
USE restaurante;

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    precio DECIMAL(10,2),
    stock INT DEFAULT 0,
    categoria ENUM('Entrante', 'Plato Principal', 'Postre', 'Bebida'),
    disponible BOOLEAN DEFAULT TRUE,
    ingredientes JSON  -- Almacena la lista de ingredientes en formato JSON
);

INSERT INTO productos (nombre, descripcion, precio, stock, categoria, disponible, ingredientes) VALUES
('Pizza Margarita', 'Pizza con tomate, mozzarella y albahaca', 8.99, 10, 'Plato Principal', TRUE,
    '{"base": "masa de trigo", "salsa": "tomate", "queso": "mozzarella", "extra": ["albahaca"]}'),
('Ensalada César', 'Lechuga, pollo, queso parmesano y aderezo César', 6.50, 15, 'Entrante', TRUE,
    '{"base": "lechuga", "proteína": "pollo", "queso": "parmesano", "aderezo": "César"}');