function mostrarCarrito() {
    const carritoJSON = localStorage.getItem('productos');
    const carritoDeCompras = document.getElementById("carritoCompras");
  
    if (carritoJSON) {
      const carrito = JSON.parse(carritoJSON);
  
      carrito.forEach((productoC) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Nombre: ${productoC.nombre}, Modelo: ${productoC.modelo}, Año: ${productoC.anio}, Precio: $${productoC.precio}`;
        carritoDeCompras.appendChild(listItem);
      });
    } else {
        Swal.fire("El carrito está vacio");;
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    mostrarCarrito();
  });