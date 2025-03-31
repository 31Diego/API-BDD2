import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Para hacer las peticiones HTTP

import './App.css';

function App() {
  const [clientes, setClientes] = useState([]); // Estado para almacenar los clientes

  // Usamos useEffect para hacer la petición cuando el componente se monte
  useEffect(() => {
    axios.get('http://localhost:5000/clientes') // Petición al backend
      .then(response => {
        setClientes(response.data); // Almacenamos los datos en el estado
      })
      .catch(error => {
        console.error('Error al obtener los clientes:', error); // Manejamos cualquier error
      });
  }, []); // El array vacío asegura que solo se ejecute una vez

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Clientes</h1> {/* Título de la sección */}

        {/* Mostramos la lista de clientes */}
        <ul>
          {clientes.map(cliente => (
            <li key={cliente.id}>
              {cliente.nombre} - {cliente.email}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;


