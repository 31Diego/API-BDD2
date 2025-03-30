document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/api/clientes')  // Realizamos la solicitud a la API
        .then(response => response.json())  // Convertir la respuesta en JSON
        .then(data => {
            console.log('Clientes obtenidos:', data);  // Verifica los datos recibidos
            const clientesContainer = document.getElementById('clientesContainer');
            data.forEach(cliente => {
                const clienteElement = document.createElement('div');
                clienteElement.classList.add('cliente-card');
                clienteElement.innerHTML = `
                    <h3>${cliente.nombre}</h3>
                    <p><strong>Email:</strong> ${cliente.email}</p>
                    <p><strong>Dirección:</strong> ${cliente.direccion}</p>
                `;
                clientesContainer.appendChild(clienteElement);
            });
        })
        .catch(error => {
            console.error('Error al obtener los clientes:', error);
            alert('Hubo un error al obtener los clientes.');
        });
});
