//Javascript de Botones Cuentas en ADMISTRADOR

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

let productos = [];

//Obtener elementos del DOM.
const tablaProductos = document.getElementById("tabla-productos");
const agregarProductosForm = document.getElementById("agregar-productos-form");
const nombreProducto = document.getElementById("nombre-producto");
const precioProducto = document.getElementById("precio-producto");
const descripcionProducto = document.getElementById("descripcion-producto");
const botonAgregarInfo = document.getElementById("boton-agregar-info");

//Funcion para agregar productos
botonAgregarInfo.addEventListener("click", (event) => {
  event.preventDefault();
  const nombre = nombreProducto.value;
  const precio = precioProducto.value;
  const descripcion = descripcionProducto.value;
  const mode = agregarProductosForm.dataset.mode;
  const editId = agregarProductosForm.dataset.editId;

  if (mode === "add") {
    const id = uuidv4();
    const producto = { id, nombre, precio, descripcion };
    productos.push(producto);
  } else if (mode === "edit") {
    const index = productos.findIndex((producto) => {
      producto.id === editId;
    });
    if (index !== -1) {
      const product = productos[index];
      product.name = nombre;
      product.precio = precio;
      product.descripcion = descripcion;
    }
  }
  //Limpiar formulario
  agregarProductosForm.reset();
  agregarProductosForm.dataset = "add";
  botonAgregarInfo.textContent = "Agregar";
  mostrarProductos();
});

//Funcion para editar
tablaProductos.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit")) {
    const id = event.target.dataset.id;
    const producto = productos.find((producto) => {
      producto.id === id;
    });
    if (producto) {
      document.getElementById("nombre-producto").value = producto.name;
      document.getElementById("precio-producto").value = producto.precio;
      document.getElementById("descripcion-producto").value =
        producto.descripcion;

      //Setar el formulario en Editar
      agregarProductosForm.dataset.mode = "edit";
      agregarProductosForm.dataset.editId = id;
      botonAgregarInfo.textContent = "Editar";
    }
  }
});

//Funcion eleminar producto
tablaProductos.addEventListener("click", (event) => {
  if (event.target.classList.contains("delate")) {
    const id = event.target.dataset.id;
    const index = productos.findIndex((producto) => {
      producto.id === id;
    });
    if (index !== -1) {
      productos.splice(index, 1);
      mostrarProductos();
    }
  }
});

const mostrarProductos = () => {
  tablaProductos.querySelector("tbody").innerHTML = "";
  productos.forEach((producto) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${producto.name}</td>
    <td>${producto.precio}</td>
    <td>${producto.descripcion}</td>
    <td>
    <button class="btn btn-primary edit" data-id="${producto.id}">Editar</button>
    <button class="btn btn-primary delete" data-id="${producto.id}">Eliminar</button>
    </td>
    `;
    tablaProductos.querySelector("tbody").appendChild(tr);
  });
};

function uuidv4() {
  return crypto.randomUUID();
}
