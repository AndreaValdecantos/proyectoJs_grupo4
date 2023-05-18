// localStorage.setItem("current.user", "richard@gmail.com");
// localStorage.setItem("current.user.isAdmin", true);

// localStorage.setItem("current.user", "otro_usuario@gmail.com");
// localStorage.setItem("current.user.isAdmin", false);

// const currentUser = JSON.parse(localStorage.getItem("current.user"));

// if (currentUser.isAdmin) {
//   alert("Iniciaste Sesion!"); // Mostrar opciones de administrador
// } else {
//   alert("Datos incorrectos"); // Mostrar opciones de usuario regular
// }

let email = document.getElementById("email");
let nombre = document.getElementById("nombre");
let contraseña = document.getElementById("contraseña");
let confirmarcontraseña = document.getElementById("confirmarcontraseña");

let users = [];

function registro() {
  let user = {
    email: email.value,
    nombre: nombre.value,
    contraseña: contraseña.value,
  };
  users.push(user);

  //llamar al array y ponerlo en el localStorage en formato JSON
  localStorage.setItem("users", JSON.stringify(users));
  console.log(user);
}

// 1) traer datos y guardarlos done.
// 2) guardar los datos en un array done.
// 3) guardar el array en el localStorage done.
// 4) verificar que todos los campos tengan texto.
// 5) enviar al login
