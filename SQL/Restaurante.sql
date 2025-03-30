-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 28-03-2025 a las 15:13:09
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `restaurante`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

DROP TABLE IF EXISTS `clientes`;
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `direccion` text,
  `fecha_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `historial_pedidos` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `email`, `direccion`, `fecha_registro`, `historial_pedidos`) VALUES
(1, 'Juan Pérez', 'juanperez@email.com', 'Calle Falsa 123, Madrid', '2025-03-28 14:43:31', '[{\"total\": 17.98, \"cantidad\": 2, \"producto\": \"Pizza Margarita\"}, {\"total\": 2.0, \"cantidad\": 1, \"producto\": \"Coca-Cola\"}]'),
(2, 'María López', 'maria.lopez@email.com', 'Avenida Central 45, Barcelona', '2025-03-28 14:43:31', '[{\"total\": 4.99, \"cantidad\": 1, \"producto\": \"Tarta de Chocolate\"}]');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

DROP TABLE IF EXISTS `empleados`;
CREATE TABLE IF NOT EXISTS `empleados` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `puesto` varchar(50) DEFAULT NULL,
  `salario` decimal(10,2) DEFAULT NULL,
  `contratado_el` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`, `puesto`, `salario`, `contratado_el`) VALUES
(1, 'Luis Fernández', 'Cocinero', '1500.00', '2023-05-12'),
(2, 'Ana Gómez', 'Mesera', '1200.00', '2022-10-08'),
(3, 'Pedro Ramírez', 'Cajero', '1100.00', '2024-01-20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE IF NOT EXISTS `pedidos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_cliente` int DEFAULT NULL,
  `id_producto` int DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `fecha_pedido` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` enum('Pendiente','En preparación','Entregado','Cancelado') DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_cliente` (`id_cliente`),
  KEY `id_producto` (`id_producto`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id`, `id_cliente`, `id_producto`, `cantidad`, `total`, `fecha_pedido`, `estado`) VALUES
(1, 1, 1, 2, '17.98', '2025-03-28 14:43:31', 'En preparación'),
(2, 2, 3, 1, '4.99', '2025-03-28 14:43:31', 'Entregado'),
(3, 1, 4, 1, '2.00', '2025-03-28 14:43:31', 'Pendiente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` text,
  `precio` decimal(10,2) DEFAULT NULL,
  `stock` int DEFAULT '0',
  `categoria` enum('Entrante','Plato Principal','Postre','Bebida') DEFAULT NULL,
  `disponible` tinyint(1) DEFAULT '1',
  `ingredientes` json DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `stock`, `categoria`, `disponible`, `ingredientes`) VALUES
(1, 'Pizza Margarita', 'Pizza con tomate, mozzarella y albahaca', '8.99', 10, 'Plato Principal', 1, '{\"base\": \"masa de trigo\", \"extra\": [\"albahaca\"], \"queso\": \"mozzarella\", \"salsa\": \"tomate\"}'),
(2, 'Ensalada César', 'Lechuga, pollo, queso parmesano y aderezo César', '6.50', 15, 'Entrante', 1, '{\"base\": \"lechuga\", \"queso\": \"parmesano\", \"aderezo\": \"César\", \"proteína\": \"pollo\"}');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


