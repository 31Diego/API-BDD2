async function cargarPedidos() {
    const pedidos = await getdata('pedidos');
    const lista = document.getElementById('pedidos-lista');
    lista.innerHTML = pedidos.map(pedido => `
        <div>
            <h3>Pedido #${pedido.id}</h3>
            <p>Cliente ID: ${pedido.id_cliente}</p>
            <p>Total: $${pedido.total}</p>
            <p>Estado: ${pedido.estado}</p>
        </div>
    `).join('');
}
