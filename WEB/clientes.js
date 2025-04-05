async function cargarClientes() {
    const clientes = await getdata('clientes');
    const lista = document.getElementById('clientes-lista');
    lista.innerHTML = clientes.map(cliente => `
        <div>
            <h3>${cliente.nombre}</h3>
            <p>Email: ${cliente.email}</p>
            <p>Dirección: ${cliente.direccion}</p>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', cargarClientes);
