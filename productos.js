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
