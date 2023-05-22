let productos = [];
// Javascript de MODAL LOGIN
// //TODO EL LOGIN DEL USUARIO

// const formularioLogin = document.getElementById("formulario-login")
// const inputsFormularioLogin = document.querySelectorAll("#formulario-login input")

// const mostrarClave = document.querySelector("#div-clave #mostrar-clave")
// const ocultarClave = document.querySelector("#div-clave #ocultar-clave")
// const inputClave = document.getElementById("clave")

// const cerrarModal = document.getElementById("cerrar-modal")

// cerrarModal.addEventListener("click", (e) => {
//   inputClave.type = "password"
//   ocultarClave.classList.add("ocultar")
//   mostrarClave.classList.remove("ocultar")
//   formularioLogin.reset()
// })

// mostrarClave.addEventListener("click", (e) => {
//   mostrarClave.classList.add("ocultar")
//   ocultarClave.classList.remove("ocultar")
//   inputClave.type = "text"
// })

// ocultarClave.addEventListener("click", (e) => {
//   ocultarClave.classList.add("ocultar")
//   mostrarClave.classList.remove("ocultar")
//   inputClave.type = "password"
// })

// const validarFormulario = (e) => {
//   if (e.target.value != "") {
//     document.querySelector("#formulario-login .mensaje-usuario").classList.remove("mensaje-usuario-activo")
//   }
// }

// inputsFormularioLogin.forEach((input) => {
//   input.addEventListener("keyup", validarFormulario)
//   input.addEventListener("blur", validarFormulario)
// })

// formularioLogin.addEventListener("submit", (e) => {
//   e.preventDefault()

//   let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

//   const email = document.getElementById("email").value
//   const clave = document.getElementById("clave").value

//   let usuarioEncontrado = usuarios.find((usuario) => usuario.email === email && usuario.clave === clave)

//   if (usuarioEncontrado) {
//     window.location.href = "productos.html"
//     localStorage.setItem("usuario_logueado", JSON.stringify(usuarioEncontrado))
//     formularioLogin.reset()
//   } else {
//     document.querySelector("#formulario-login .mensaje-usuario").classList.add("mensaje-usuario-activo")
//   }
// })

//-----------------------------------------------------------------------------------

//Javascript de Botones Marcas-Producto

const dropdownsCuentas = document.querySelectorAll(".dropdownCuentas");

// Bucle a través de todos los elementos .DROPDOWNS
dropdownsCuentas.forEach((dropdownC) => {
  //Obtener elementos internos de .DROPDOWNS
  const selectCuentas = dropdownC.querySelector(".selectCuentas");
  const caretCuentas = dropdownC.querySelector(".caretCuentas");
  const menuCuentas = dropdownC.querySelector(".menuCuentas");
  const optionsCuentas = dropdownC.querySelectorAll(".menuCuentas li");
  const selectedCuentas = dropdownC.querySelector(".selectedCuentas");

  //Método para que funcionen varios menús dropdown de la página

  //Agregar un evento de clic al elemento seleccionado
  selectCuentas.addEventListener("click", () => {
    //Agregar el estilo de SELECCION en el que se hizo clic al elemento de SELECCION
    selectCuentas.classList.toggle("select-clickedCuentas");

    //Agrega la rotación al elemento de intercalación
    caretCuentas.classList.toggle("caret-rotateCuentas");

    //Agregar el estilo abierto al elemento del MENU
    menuCuentas.classList.toggle("menu-openCuentas");
  });

  //bucle a través de todos los elementos de opción
  optionsCuentas.forEach((optionC) => {
    //agregue un evento de clic al elemento de OPTION
    optionC.addEventListener("click", () => {
      //Cambie la selección interna al texto interno de la opción en la que se hizo clic
      selectedCuentas.innerText = optionC.innerText;
      //cambiar seleccionar dentro del texto interior de la opción en la que se hizo clic
      selectCuentas.classList.remove("select-clickedCuentas");
      //agregar estilo de rotación al elemento de intercalación
      caretCuentas.classList.remove("caret-rotateCuentas");
      //agregue el estilo abierto al elemento del MENU
      menuCuentas.classList.remove("menu-openCuentas");
      //eliminar la clase activa de todos los elementos de opción
      optionsCuentas.forEach((optionC) => {
        optionC.classList.remove("active");
      });
      //agregar clase activa al elemento de opción en el que se hizo clic
      optionC.classList.add("active");
    });
  });
});

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

//Javascript de Barra de Precios

const dropdownsPrecios = document.querySelectorAll(".dropdownPrecios");

// bucle a través de todos los elementos boton-1
dropdownsPrecios.forEach((dropdownP) => {
  //obtener elementos internos de cada .DROPDOWNS
  const selectPrecios = dropdownP.querySelector(".selectPrecios");
  const caretPrecios = dropdownP.querySelector(".caretPrecios");
  const menuPrecios = dropdownP.querySelector(".menuPrecios");
  const optionsPrecios = dropdownP.querySelectorAll(".menuPrecios li");
  const selectedPrecios = dropdownP.querySelector(".selectedPrecios");

  // usamos este método para que funcionen varios menús dropdown de la página

  //agregar un evento de clic al elemento seleccionado
  selectPrecios.addEventListener("click", () => {
    //agregue el estilo de SELECCION en el que se hizo clic al elemento de SELECCION
    selectPrecios.classList.toggle("selectPrecios-clicked");

    //agregue la rotación al elemento de intercalación
    caretPrecios.classList.toggle("caretPrecios-rotate");

    //agregue el estilo abierto al elemento del MENU
    menuPrecios.classList.toggle("menuPrecios-open");
  });

  //bucle a través de todos los elementos de opción
  optionsPrecios.forEach((optionP) => {
    //agregue un evento de clic al elemento de OPTION
    optionP.addEventListener("click", () => {
      //Cambie la selección interna al texto interno de la opción en la que se hizo clic
      selectedPrecios.innerText = optionP.innerText;
      //cambiar seleccionar dentro del texto interior de la opción en la que se hizo clic
      selectPrecios.classList.remove("selectPrecios-clicked");
      //agregar estilo de rotación al elemento de intercalación
      caretPrecios.classList.remove("caretPrecios-rotate");
      //agregue el estilo abierto al elemento del MENU
      menuPrecios.classList.remove("menuPrecios-open");
      //eliminar la clase activa de todos los elementos de opción
      optionsPrecios.forEach((optionP) => {
        optionP.classList.remove("active");
      });
      //agregar clase activa al elemento de opción en el que se hizo clic
      optionP.classList.add("active");
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
  localStorage.removeItem("usuario_logueado");
  window.location.href = "productos.html";
});

// //REGISTRO

//   const formularioRegistro = document.getElementById('formulario-registro')

//   formularioRegistro.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const nombre = document.getElementById('nombre').value
//     const email = document.getElementById('email-registro').value
//     const clave = document.getElementById('contraseña').value
//     const confirmarcontraseña = document.getElementById("confirmarcontraseña").value

//     let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

//     usuarioEncontrado = usuarios.find(usuario => usuario.email === email)

//     if (usuarioEncontrado) {
//       alert("El usuario ya está registrado")
//     } else {
//       usuarios.push({ nombre: nombre, email: email, clave: clave })
//       localStorage.setItem('usuarios', JSON.stringify(usuarios))
//       alert("Registro exitoso")
//       document.location.href = 'productos.html'
//     }

//     formularioRegistro.reset()
//   })

/*-------------------------------------*/

function cargarLocalStorage() {
  const productosLocalStorage = JSON.parse(localStorage.getItem("productos"));
  console.log(productosLocalStorage);
  if (productosLocalStorage) {
    productos = productosLocalStorage;
    // mostrarProductos();
  }
}
cargarLocalStorage();

function crearCards() {
  const ilustrarCards = document.querySelector(".ilustracion-cards");
  // let card = document.createElement("div");
  // card.className = "novedades";
  // card.innerHTML = JSON.stringify(productos);
  productos.forEach((producto) => {
    let card = document.createElement("div");
    card.className = "novedades";
    card.innerHTML = `
    <div id="columna-imagen-card">
    <img src="${producto.imagen}" alt="Imagen de Producto">
    </div>
    <div id="texto-card-producto">
    <h4>${producto.tipo} ${producto.marca} ${producto.modelo}</h4>
    <h6>${producto.descripcion}</h6>
    <h5 class="precio-producto">$${producto.precio}</h5>
    </div>
    <div id="ver-mas-card">
    <a href="./error 404/error404.html">Ver mas</a>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>
    </div>
    `;
    ilustrarCards.appendChild(card);
  });
}
crearCards();
