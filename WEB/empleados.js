async function cargarEmpleados() {
    const empleados = await getdata('empleados');
    const lista = document.getElementById('empleados-lista');
    lista.innerHTML = empleados.map(empleado => `
        <div>
            <h3>${empleado.nombre}</h3>
            <p>Puesto: ${empleado.puesto}</p>
            <p>Salario: $${empleado.salario}</p>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', cargarEmpleados);
