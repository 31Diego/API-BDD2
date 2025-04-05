async function cargarProductos() {
    const productos = await getdata('productos');
    const lista = document.getElementById('productos-lista');
    lista.innerHTML = productos.map(producto => `
        <div>
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio}</p>
            <p>Stock: ${producto.stock}</p>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', cargarProductos);
