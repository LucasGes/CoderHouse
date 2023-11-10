const auto = function (id, nombre, modelo, anio, imagen, precio, stock) {
  this.id = id;
  this.nombre = nombre.toUpperCase();
  this.modelo = modelo.toUpperCase();
  this.anio = anio;
  this.imagen = imagen;
  this.precio = parseFloat(precio);
  this.stock = stock;
};

const auto1 = new auto(
  1,
  "Toyota",
  "Corolla",
  2022,
  "https://crdms.images.consumerreports.org/c_lfill,w_555,q_auto,f_auto/prod/cars/chrome/white/2023TOC040021_1280_07",
  28400,
  2
);
const auto2 = new auto(
  2,
  "Honda",
  "Civic",
  2023,
  "https://crdms.images.consumerreports.org/c_lfill,w_555,q_auto,f_auto/prod/cars/chrome/white/2023HOC020210_1280_07",
  32500,
  3
);
const auto3 = new auto(
  3,
  "Ford",
  "Mustang",
  2022,
  "https://crdms.images.consumerreports.org/c_lfill,w_720,q_auto,f_auto/prod/cars/chrome/white/2023FOC050017_1280_01",
  115000,
  1
);
const auto4 = new auto(
  4,
  "Chevrolet",
  "Silverado",
  2023,
  "https://crdms.images.consumerreports.org/c_lfill,w_555,q_auto,f_auto/prod/cars/chrome/white/2024CHT920001_1280_01",
  68580,
  3
);
const auto5 = new auto(
  5,
  "Nissan",
  "Altima",
  2022,
  "https://crdms.images.consumerreports.org/c_lfill,w_720,q_auto,f_auto/prod/cars/chrome/white/2023NIC040056_1280_01",
  61900,
  2
);
const auto6 = new auto(
  6,
  "BMW",
  "3 Series",
  2023,
  "https://crdms.images.consumerreports.org/c_lfill,w_720,q_auto,f_auto/prod/cars/chrome/white/2023BMC220001_1280_01",
  120000,
  2
);
const auto7 = new auto(
  7,
  "Audi",
  "A4",
  2022,
  "https://images.dealer.com/ddc/vehicles/2022/Audi/A4/Sedan/trim_40_Premium_bd15d6/color/Navarra%20Blue%20Metallic-2D2D-23%2C32%2C52-640-en_US.jpg?impolicy=resize&w=1024",
  79000,
  3
);
const auto8 = new auto(
  8,
  "Mercedes-Benz",
  "C-Class",
  2023,
  "https://crdms.images.consumerreports.org/c_lfill,w_720,q_auto,f_auto/prod/cars/chrome/white/2023MBC890001_1280_01",
  1650000,
  2
);
const auto9 = new auto(
  9,
  "Volkswagen",
  "Golf",
  2022,
  "https://crdms.images.consumerreports.org/c_lfill,w_555,q_auto,f_auto/prod/cars/chrome/white/2022VWC260001_1280_01",
  27000,
  3
);
const auto10 = new auto(
  10,
  "Hyundai",
  "Sonata",
  2023,
  "https://crdms.images.consumerreports.org/c_lfill,w_555,q_auto,f_auto/prod/cars/chrome/white/2023HYC030006_1280_01",
  35000,
  2
);

let autos = [
  auto1,
  auto2,
  auto3,
  auto4,
  auto5,
  auto6,
  auto7,
  auto8,
  auto9,
  auto10,
];
let carrito = [];

document.addEventListener("DOMContentLoaded", function () {
  function mostrarAutos() {
    const listaAutos = document.getElementById("lista-autos");

    for (let i = 0; i < Math.min(autos.length, 5); i++) {
      const auto = autos[i];

      const listItem = document.createElement("li");
      const infoAuto = document.createElement("div");

      infoAuto.innerHTML = `Nombre: ${auto.nombre}<br>Modelo: ${auto.modelo}<br>Año: ${auto.anio}<br>Precio: U$${auto.precio}`;

      infoAuto.className = "infoAuto";
      const imagenAuto = document.createElement("img");
      imagenAuto.src = auto.imagen;
      imagenAuto.className = "auto-imagen";

      const botonComprar = document.createElement("button");
      botonComprar.textContent = "Comprar";
      botonComprar.className = "BotonCompra";
      botonComprar.addEventListener("click", () => {
        carrito.push(auto);
        localStorage.setItem('productos', JSON.stringify(carrito));
        Swal.fire({
          title: "Agregar al Carrito",
          text: "Está seguro que desa agregar el auto al carrito?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Agregar!",
        }).then((result) => {
          if (result.isConfirmed) {
        
            Swal.fire({
              title: "Confirmado!",
              text: "El auto se agregó al carrito correctamente!",
              icon: "success",
              confirmButtonText: "Continuar Comprando",
              footer: '<a href="http://127.0.0.1:5500/carrito.html" id="a">Ver Carrito</a>',
            });

            const agregarCarrito = document.getElementById("a");
            agregarCarrito.addEventListener("click", () => {
              mostrarCarrito();
            });

           

              }
        });
      });

      infoAuto.appendChild(botonComprar);

      listItem.appendChild(infoAuto);
      listItem.appendChild(imagenAuto);

      listaAutos.appendChild(listItem);
    }
  }

  mostrarAutos();
  document.addEventListener("DOMContentLoaded", function () {
    mostrarCarrito();
  });

  function mostrarAutos2() {
    const listaAutos = document.getElementById("perro");

    for (let i = 5; i < Math.min(autos.length, 10); i++) {
      const auto = autos[i];

      const listItem = document.createElement("li");
      const infoAuto = document.createElement("div");

      infoAuto.innerHTML = `Nombre: ${auto.nombre}<br>Modelo: ${auto.modelo}<br>Año: ${auto.anio}<br>Precio: U$${auto.precio}`;

      infoAuto.className = "infoAuto";
      const imagenAuto = document.createElement("img");
      imagenAuto.src = auto.imagen;
      imagenAuto.className = "auto-imagen";

      const botonComprar = document.createElement("button");
      botonComprar.textContent = "Comprar";
      botonComprar.className = "BotonCompra";
      botonComprar.addEventListener("click", () => {
        carrito.push(auto);
        localStorage.setItem('productos', JSON.stringify(carrito));
        Swal.fire({
          title: "Agregar al Carrito",
          text: "Está seguro que desa agregar el auto al carrito?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Agregar!",
        }).then((result) => {
          if (result.isConfirmed) {
        
            Swal.fire({
              title: "Confirmado!",
              text: "El auto se agregó al carrito correctamente!",
              icon: "success",
              confirmButtonText: "Continuar Comprando",
              footer: '<a href="http://127.0.0.1:5500/carrito.html" id="a">Ver Carrito</a>',
            });

            const agregarCarrito = document.getElementById("a");
            agregarCarrito.addEventListener("click", () => {
              mostrarCarrito();
            });

           

              }
        });
      });

      infoAuto.appendChild(botonComprar);


      listItem.appendChild(infoAuto);
      listItem.appendChild(imagenAuto);

      listaAutos.appendChild(listItem);
    }
  }

  mostrarAutos2();
});

/*Filtrado*/

const filtrarBtn = document.getElementById("filtrar");

filtrarBtn.addEventListener("click", () => {
  filtrarProductos();
});

function filtrarProductos() {
  const productoF = document.getElementById("filtrarP").value;

  const productoSeleccionado = productoF.trim().toUpperCase();

  const resultado = autos.filter((x) =>
    x.nombre.toUpperCase().includes(productoSeleccionado)
  );

  if (resultado != null) {
    const resultadoLista = document.getElementById("resultadoLista");
  }

  if (resultado.length > 0) {
    resultadoLista.innerHTML = "";

    resultado.forEach((productoEncontrado) => {
      const listItem = document.createElement("li");
      listItem.textContent = `Nombre: ${productoEncontrado.nombre}, Modelo: ${productoEncontrado.modelo}, Año: ${productoEncontrado.anio}, Precio: $${productoEncontrado.precio} `;
      resultadoLista.appendChild(listItem);
    });
  } else {
    resultadoLista.innerHTML = "";
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Auto no encontrado",
    });
  }
}



