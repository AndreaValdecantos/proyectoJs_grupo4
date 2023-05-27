//TODO EL LOGIN DEL USUARIO, se necesita el localStorage del registro

const formularioLogin = document.getElementById("formulario-login")
const inputsFormularioLogin = document.querySelectorAll(
  "#formulario-login input"
)

const mostrarClave = document.querySelector("#div-clave #mostrar-clave")
const ocultarClave = document.querySelector("#div-clave #ocultar-clave")
const inputClave = document.getElementById("clave")

const cerrarModal = document.getElementById("cerrar-modal")

cerrarModal.addEventListener("click", (e) => {
  inputClave.type = "password"
  ocultarClave.classList.add("ocultar")
  mostrarClave.classList.remove("ocultar")
  formularioLogin.reset()
})

mostrarClave.addEventListener("click", (e) => {
  mostrarClave.classList.add("ocultar")
  ocultarClave.classList.remove("ocultar")
  inputClave.type = "text"
})

ocultarClave.addEventListener("click", (e) => {
  ocultarClave.classList.add("ocultar")
  mostrarClave.classList.remove("ocultar")
  inputClave.type = "password"
})

const validarFormulario = (e) => {
  if (e.target.value != "") {
    document.querySelector("#formulario-login .mensaje-usuario").classList.remove("mensaje-usuario-activo")
  }
}

inputsFormularioLogin.forEach((input) => {
  input.addEventListener("keyup", validarFormulario)
  input.addEventListener("blur", validarFormulario)
})

formularioLogin.addEventListener("submit", (e) => {
  e.preventDefault()

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

  const email = document.getElementById("email").value
  const clave = document.getElementById("clave").value

  let usuarioEncontrado = usuarios.find(
    (usuario) => usuario.email === email && usuario.clave === clave)

  if (usuarioEncontrado) {
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: '¡Bienvenido ' + usuarioEncontrado.nombre + '!',
      showConfirmButton: false,
      timer: 2000
    })
    setInterval(function () {window.location.href = "../productos.html"}, 2000)
    localStorage.setItem("usuario_logueado", JSON.stringify(usuarioEncontrado))
    formularioLogin.reset()
  } else {
    document.querySelector("#formulario-login .mensaje-usuario").classList.add("mensaje-usuario-activo")
  }
})

