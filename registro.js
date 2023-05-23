//REGISTRO

const formularioRegistro = document.getElementById('formulario-registro')

formularioRegistro.addEventListener('submit', (e) => {
  e.preventDefault()

  const nombre = document.getElementById('nombre')
  const email = document.getElementById('email-registro')
  const clave = document.getElementById('contraseña')
  const confirmarcontraseña = document.getElementById("confirmarcontraseña")

  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

  usuarioEncontrado = usuarios.find(usuario => usuario.email === email.value)

  const validarFormulario = (e) => {
    if (e.target.value != "") {
      confirmarcontraseña.setAttribute("style", "border-color:black;");
      document.querySelector("#formulario-registro .mensaje-contraseña").classList.remove("mensaje-contraseña-activo")
    }
  }

  confirmarcontraseña.addEventListener("keyup", validarFormulario)
  confirmarcontraseña.addEventListener("blur", validarFormulario)

  if (usuarioEncontrado) {
    alert("El email ya fue usado para el registro")
  } else {
    if (nombre.value != "" && email.value != "" && clave.value != "" && clave.value === confirmarcontraseña.value) {
      usuarios.push({ nombre: nombre.value, email: email.value, clave: clave.value })
      localStorage.setItem('usuarios', JSON.stringify(usuarios))
      // alert("Registro exitoso")
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Te has registrado con exito',
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(() => {
        document.location.href = 'productos.html';
      }, "1000");
      formularioRegistro.reset()
    } else {
      document.querySelector("#formulario-registro .mensaje-contraseña").classList.add("mensaje-contraseña-activo")
      confirmarcontraseña.setAttribute("style", "border-color:red;");
    }
  }
})

// // localStorage.setItem("current.user", "richard@gmail.com");
// // localStorage.setItem("current.user.isAdmin", true);

// // localStorage.setItem("current.user", "otro_usuario@gmail.com");
// // localStorage.setItem("current.user.isAdmin", false);

// // const currentUser = JSON.parse(localStorage.getItem("current.user"));

// // if (currentUser.isAdmin) {
// //   alert("Iniciaste Sesion!"); // Mostrar opciones de administrador
// // } else {
// //   alert("Datos incorrectos"); // Mostrar opciones de usuario regular
// // }

// let email = document.getElementById("email");
// let nombre = document.getElementById("nombre");
// let contraseña = document.getElementById("contraseña");
// let confirmarcontraseña = document.getElementById("confirmarcontraseña");

// let users = [];

// function registro() {
//   let user = {
//     email: email.value,
//     nombre: nombre.value,
//     contraseña: contraseña.value,
//   };
//   users.push(user);

//   //llamar al array y ponerlo en el localStorage en formato JSON
//   localStorage.setItem("users", JSON.stringify(users));
//   console.log(user);
// }

// // 1) traer datos y guardarlos done.
// // 2) guardar los datos en un array done.
// // 3) guardar el array en el localStorage done.
// // 4) verificar que todos los campos tengan texto.
// // 5) enviar al login
