usuarioLogueado = JSON.parse(localStorage.getItem('usuario_logueado')) || false

console.log(usuarioLogueado.nombre)

if (!usuarioLogueado || usuarioLogueado.email != 'admin@correo') {
  window.location.href = 'productos.html'
} else {
  
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
// export let productos = [];

//Obtener los elementos del DOM

const listaProductos = document.getElementById("lista-productos");
const agregarProductosForm = document.getElementById("agregarProductosForm");
const tipoProducto = document.getElementById("tipoProducto");
const marcaProducto = document.getElementById("marcaProducto");
const modeloProducto = document.getElementById("modeloProducto");
const precioProducto = document.getElementById("precioProducto");
const descripcionProducto = document.getElementById("descripcionProducto");
const imagenProducto = document.getElementById("imagenProducto");
// export const addProductoButton = document.getElementById("addProductoButton");

//Funcion para agregar productos

addProductoButton.addEventListener("click", (e) => {
  e.preventDefault();

  const tipo = tipoProducto.value;
  const marca = marcaProducto.value;
  const modelo = modeloProducto.value; // value es el valor que tiene el input
  const precio = precioProducto.value;
  const descripcion = descripcionProducto.value;
  const imagen = imagenProducto.value;
  const mode = agregarProductosForm.dataset.mode; // dataset es un objeto que contiene todos los atributos de un elemento
  const editId = agregarProductosForm.dataset.editId;

  if (mode === "add") {
    const id = uuidv4();
    const producto = { id, tipo, marca, modelo, precio, descripcion, imagen };
    productos.push(producto);
  } else if (mode === "edit") {
    const index = productos.findIndex((producto) => producto.id === editId);
    if (index !== -1) {
      const producto = productos[index];
      producto.tipo = tipo;
      producto.marca = marca;
      producto.modelo = modelo;
      producto.precio = precio;
      producto.descripcion = descripcion;
      producto.imagen = imagen;
    }
  }

  //Limpiar el formulario
  agregarProductosForm.reset();
  agregarProductosForm.dataset.mode = "add";
  addProductoButton.textContent = "Agregar";

  //llamar a una funcion que actualiza la lista de productos
  mostrarProductos();
});

// Funcion para editar productos

listaProductos.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) {
    // Si cuando escucha el click el elemento tiene la clase edit retorna true
    const idCapturado = e.target.dataset.id; // dataset es un objeto que contiene todos los atributos de un elemento
    const producto = productos.find((producto) => producto.id === idCapturado);

    if (producto) {
      document.getElementById("tipoProducto").value = producto.tipo;
      document.getElementById("marcaProducto").value = producto.marca;
      document.getElementById("modeloProducto").value = producto.modelo;
      document.getElementById("precioProducto").value = producto.precio;
      document.getElementById("descripcionProducto").value =
        producto.descripcion;
      document.getElementById("imagenProducto").value = producto.imagen;

      // Setear el formulario para que este en modo editar
      agregarProductosForm.dataset.mode = "edit";
      // almacenar el id del producto que se esta editando
      agregarProductosForm.dataset.editId = idCapturado; // va con la linea 29
      // cambiar el texto del boton
      addProductoButton.textContent = "Editar";
    }
  }
});

// Funcion para eliminar productos

listaProductos.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    Swal.fire({
      title: "¿Desea eliminar este producto?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5e17eb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        const id = e.target.dataset.id;
        const index = productos.findIndex((producto) => producto.id === id); // tiene que ser true para que lo encuentre
        if (index !== -1) {
          productos.splice(index, 1);
          mostrarProductos();
        }
        Swal.fire(
          "Eliminado!",
          "Su archivo ha sido eliminado con exito.",
          "success"
        );
      }
    });
  }
});

// Funcion para mostrar los productos en el DOM

const mostrarProductos = () => {
  listaProductos.querySelector("tbody").innerHTML = ""; // para que pueda resetear la tabla
  productos.forEach((producto) => {
    const tr = document.createElement("tr");

    const tipoProducto = document.createElement("td");
    tipoProducto.textContent = producto.tipo;

    const marcaProducto = document.createElement("td");
    marcaProducto.textContent = producto.marca;

    const modeloProducto = document.createElement("td");
    modeloProducto.textContent = producto.modelo;

    const precioProducto = document.createElement("td");
    precioProducto.textContent = "$"+producto.precio;

    const descripcionProducto = document.createElement("td");
    descripcionProducto.textContent = producto.descripcion;

    const imagenCelda = document.createElement("td");
    const imagenProducto = document.createElement("img");
    imagenProducto.src = producto.imagen;
    imagenProducto.atl = "Imagen de producto por URL";
    imagenProducto.classList.add("producto-imagen");
    imagenCelda.appendChild(imagenProducto);

    const celdaBoton = document.createElement("td");
    const editarButton = document.createElement("button");
    editarButton.setAttribute("class", "btn btn-primary edit");
    editarButton.setAttribute("data-id", producto.id);
    editarButton.textContent = "Editar";

    const eliminarButton = document.createElement("button");
    eliminarButton.setAttribute("class", "btn btn-primary delete");
    eliminarButton.setAttribute("data-id", producto.id);
    eliminarButton.textContent = "Eliminar";

    tr.appendChild(tipoProducto);
    tr.appendChild(marcaProducto);
    tr.appendChild(modeloProducto);
    tr.appendChild(precioProducto);
    tr.appendChild(descripcionProducto);
    tr.appendChild(imagenCelda);
    // tr.appendChild(celdaBoton)
    tr.appendChild(editarButton);
    tr.appendChild(eliminarButton);

    listaProductos.appendChild(tr);

    listaProductos.querySelector("tbody").appendChild(tr);
  });

  // Guardar los productos en el local storage
  localStorage.setItem("productos", JSON.stringify(productos));
};

// Funcion para generar un id unico

function uuidv4() {
  return crypto.randomUUID();
}
// obtener los productos del local storage

const productosLocalStorage = JSON.parse(localStorage.getItem("productos"));

if (productosLocalStorage) {
  productos = productosLocalStorage;
  mostrarProductos();
}
}
