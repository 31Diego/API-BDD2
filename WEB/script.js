document.getElementById("btn-cargar").addEventListener("click", async () => {
    const tablaBody = document.querySelector("#tabla-datos tbody");
    tablaBody.innerHTML = "<tr><td colspan='3'>Cargando...</td></tr>";
  
    try {
      const response = await fetch("http://localhost:8000/api/empleados");
      const datos = await response.json();
  
      tablaBody.innerHTML = "";
      datos.forEach(item => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td>${item.nombre || "-"}</td>
          <td>${item.telefono || "-"}</td>
          <td>${item.correo || "-"}</td>
        `;
        tablaBody.appendChild(fila);
      });
  
      if (datos.length === 0) {
        tablaBody.innerHTML = "<tr><td colspan='3'>No se encontraron datos.</td></tr>";
      }
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      tablaBody.innerHTML = "<tr><td colspan='3'>Error al cargar los datos.</td></tr>";
    }
  });
  