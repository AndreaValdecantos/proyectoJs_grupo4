const dropdowns = document.querySelectorAll(".dropdown");

// bucle a través de todos los elementos boton-1
dropdowns.forEach((dropdown) => {
  //obtener elementos internos de cada .DROPDOWNS
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  // usamos este método para que funcionen varios menús dropdown de la página

  //agregar un evento de clic al elemento seleccionado
  select.addEventListener("click", () => {
    //agregue el estilo de SELECCION en el que se hizo clic al elemento de SELECCION
    select.classList.toggle("select-clicked");

    //agregue la rotación al elemento de intercalación
    caret.classList.toggle("caret-rotate");

    //agregue el estilo abierto al elemento del MENU
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

