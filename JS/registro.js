//REGISTRO

const formularioRegistro = document.getElementById("formulario-registro");

formularioRegistro.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email-registro");
  const clave = document.getElementById("contraseña");
  const confirmarcontraseña = document.getElementById("confirmarcontraseña");

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  usuarioEncontrado = usuarios.find((usuario) => usuario.email === email.value);

  const validarFormulario = (e) => {
    if (e.target.value != "") {
      confirmarcontraseña.setAttribute("style", "border-color:black;");
      document
        .querySelector("#formulario-registro .mensaje-contraseña")
        .classList.remove("mensaje-contraseña-activo");
    }
  };

  confirmarcontraseña.addEventListener("keyup", validarFormulario);
  confirmarcontraseña.addEventListener("blur", validarFormulario);

  if (usuarioEncontrado) {
    alert("El email ya fue usado para el registro");
  } else {
    if (
      nombre.value != "" &&
      email.value != "" &&
      clave.value != "" &&
      clave.value === confirmarcontraseña.value
    ) {
      usuarios.push({
        nombre: nombre.value,
        email: email.value,
        clave: clave.value,
      });
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      // alert("Registro exitoso")
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Te has registrado con exito",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        document.location.href = "../index.html";
      }, "1000");
      formularioRegistro.reset();
    } else {
      document
        .querySelector("#formulario-registro .mensaje-contraseña")
        .classList.add("mensaje-contraseña-activo");
      confirmarcontraseña.setAttribute("style", "border-color:red;");
    }
  }
});
