let productos = [];
//-----------------------------------------------------------------------------------

//Javascript de Botones Marcas-Producto

const dropdowns = document.querySelectorAll(".dropdown");

// Bucle a través de todos los elementos .DROPDOWNS
dropdowns.forEach((dropdown) => {
  //Obtener elementos internos de .DROPDOWNS
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  //Método para que funcionen varios menús dropdown de la página

  //Agregar un evento de clic al elemento seleccionado
  select.addEventListener("click", () => {
    //Agregar el estilo de SELECCION en el que se hizo clic al elemento de SELECCION
    select.classList.toggle("select-clicked");

    //Agrega la rotación al elemento de intercalación
    caret.classList.toggle("caret-rotate");

    //Agregar el estilo abierto al elemento del MENU
    menu.classList.toggle("menu-open");
  });

  //bucle a través de todos los elementos de opción
  options.forEach((option) => {
    //agregue un evento de clic al elemento de OPTION
    option.addEventListener("click", () => {
      //Cambie la selección interna al texto interno de la opción en la que se hizo clic
      selected.innerText = option.innerText;
      //cambiar seleccionar dentro del texto interior de la opción en la que se hizo clic
      select.classList.remove("select-clicked");
      //agregar estilo de rotación al elemento de intercalación
      caret.classList.remove("caret-rotate");
      //agregue el estilo abierto al elemento del MENU
      menu.classList.remove("menu-open");
      //eliminar la clase activa de todos los elementos de opción
      options.forEach((option) => {
        option.classList.remove("active");
      });
      //agregar clase activa al elemento de opción en el que se hizo clic
      option.classList.add("active");
    });
  });
});

//-----------------------------------------------------------------------------------

//PARA MOSTRAR LOS BOTONES DE LOGIN/LOGOUT/ADMINISTRACIÓN SEGÚN EL ESTADO DE LA SESIÓN Y EL MENU DESPLEGABLE DE SESIÓN INICIADA

let usuarioLogueado =
  JSON.parse(localStorage.getItem("usuario_logueado")) || false;
let botonLogin = document.getElementById("boton-login");
let botonLogout = document.getElementById("boton-logout");
let botonRegistro = document.getElementById("boton-registro");
let paginaAdministracion = document.getElementById("pagina-administracion");
let hamburguesa = document.getElementById("hamburguesa");
let nombreUsuarioLogueado = document.getElementById("nombre-usuario-logueado");

if (!usuarioLogueado) {
  //no logueado
  botonLogout.classList.add("ocultar-elemento");
  paginaAdministracion.classList.add("ocultar-elemento");
  botonLogin.classList.remove("ocultar-elemento");
  hamburguesa.classList.remove("ocultar-elemento");
  nombreUsuarioLogueado.classList.add("ocultar-elemento");
} else {
  //logueado
  nombreUsuarioLogueado.innerHTML = usuarioLogueado.nombre;
  hamburguesa.classList.add("ocultar-elemento");
  nombreUsuarioLogueado.classList.remove("ocultar-elemento");
  botonLogin.classList.add("ocultar-elemento");
  botonRegistro.classList.add("ocultar-elemento");
  botonLogout.classList.remove("ocultar-elemento");
  if (usuarioLogueado.email == "admin@correo") {
    paginaAdministracion.classList.remove("ocultar-elemento");
  } else {
    paginaAdministracion.classList.add("ocultar-elemento");
  }
}

//LOGOUT
botonLogout.addEventListener("click", () => {
  Swal.fire({
    title: "¿Estás seguro de cerrar sesión?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, continuar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Sesión cerrada con éxito", "¡Hasta la próxima!", "success");
      localStorage.removeItem("usuario_logueado");
      if (window.location.pathname == "/productos.html" ) {
        window.location.href = "productos.html";
      } else {
        window.location.href = "../productos.html"
      }
    }
  });
});
/*-------------------------------------*/

function cargarLocalStorage() {
  const productosLocalStorage = JSON.parse(localStorage.getItem("productos"));
  if (productosLocalStorage) {
    productos = productosLocalStorage;
  }
}
cargarLocalStorage();

function crearCards() {
  const ilustrarCards = document.querySelector(".ilustracion-cards");
  productos.forEach((producto) => {
    let card = document.createElement("div");
    card.className = `novedades ${producto.tipo.toLowerCase()} ${producto.marca
      .split(" ")
      .join("")}`;
    card.innerHTML = `
    <div id="columna-imagen-card">
    <img src="${producto.imagen}" alt="Imagen de Producto">
    </div>
    <div id="texto-card-producto">
    <h4 class="nombre-producto-card">${producto.tipo} ${producto.marca} ${producto.modelo}</h4>
    <h6>${producto.descripcion}</h6>
    <h5 class="precio-producto">$${producto.precio}</h5>
    </div>
    <div class="ver-mas-card">
    <a href="./error-404/error404.html">Ver mas</a>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>
    </div>
    `;
    ilustrarCards.appendChild(card);
  });
}
crearCards();

// -----------------------FILTROS--------------------------------------------

//Filtro de Marcas Y Productos
let botonFiltroTeclados = document.getElementById("teclados");
let botonFiltroAuriculares = document.getElementById("auriculares");
let botonFiltroMouse = document.getElementById("mouse");
let botonFiltroLogitech = document.getElementById("productosLogitech");
let botonFiltroRedDragon = document.getElementById("productosRedDragon");
let botonFiltroHyperex = document.getElementById("Hyperex");
let tarjetaProducto = document.getElementsByClassName("novedades");
let arrayTarjetas = Array.from(tarjetaProducto);

botonFiltroTeclados.addEventListener("click", (e) => {
  e.preventDefault();

  arrayTarjetas.forEach((tarjeta) => {
    if (
      tarjeta.classList.contains("mouse") ||
      tarjeta.classList.contains("auriculares")
    ) {
      tarjeta.classList.add("ocultar-elemento");
    } else {
      tarjeta.classList.remove("ocultar-elemento");
    }
  });
});

botonFiltroMouse.addEventListener("click", (e) => {
  e.preventDefault();

  arrayTarjetas.forEach((tarjeta) => {
    if (
      tarjeta.classList.contains("teclado") ||
      tarjeta.classList.contains("auriculares")
    ) {
      tarjeta.classList.add("ocultar-elemento");
    } else {
      tarjeta.classList.remove("ocultar-elemento");
    }
  });
});

botonFiltroAuriculares.addEventListener("click", (e) => {
  e.preventDefault();

  arrayTarjetas.forEach((tarjeta) => {
    if (
      tarjeta.classList.contains("teclado") ||
      tarjeta.classList.contains("mouse")
    ) {
      tarjeta.classList.add("ocultar-elemento");
    } else {
      tarjeta.classList.remove("ocultar-elemento");
    }
  });
});

botonFiltroLogitech.addEventListener("click", (e) => {
  e.preventDefault();

  arrayTarjetas.forEach((tarjeta) => {
    if (
      tarjeta.classList.contains("RedDragon") ||
      tarjeta.classList.contains("Hyperex")
    ) {
      tarjeta.classList.add("ocultar-elemento");
    } else {
      tarjeta.classList.remove("ocultar-elemento");
    }
  });
});
botonFiltroHyperex.addEventListener("click", (e) => {
  e.preventDefault();

  arrayTarjetas.forEach((tarjeta) => {
    if (
      tarjeta.classList.contains("RedDragon") ||
      tarjeta.classList.contains("Logitech")
    ) {
      tarjeta.classList.add("ocultar-elemento");
    } else {
      tarjeta.classList.remove("ocultar-elemento");
    }
  });
});
botonFiltroRedDragon.addEventListener("click", (e) => {
  e.preventDefault();

  arrayTarjetas.forEach((tarjeta) => {
    if (
      tarjeta.classList.contains("Hyperex") ||
      tarjeta.classList.contains("Logitech")
    ) {
      tarjeta.classList.add("ocultar-elemento");
    } else {
      tarjeta.classList.remove("ocultar-elemento");
    }
  });
});

/*************************************/

//Filtro buscador input
const formularioBusqueda = document.getElementById("buscador-nav");
formularioBusqueda.addEventListener((type = "keyup"), (e) => {
  if (e.target.matches("#buscador-nav")) {
    arrayTarjetas.forEach((tarjeta) => {
      if (
        tarjeta.textContent
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      ) {
        tarjeta.classList.remove("ocultar-elemento");
      } else {
        tarjeta.classList.add("ocultar-elemento");
      }
    });
  }
});

/*************************************/
