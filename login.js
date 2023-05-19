//TODO EL LOGIN DEL USUARIO, se necesita el localStorage del registro

const formularioLogin = document.getElementById("formulario-login")
const inputsFormularioLogin = document.querySelectorAll("#formulario-login input")

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

  let usuarioEncontrado = usuarios.find((usuario) => usuario.email === email && usuario.clave === clave)

  if (usuarioEncontrado) {
    window.location.href = "productos.html"
    localStorage.setItem("usuario_logueado", JSON.stringify(usuarioEncontrado))
    formularioLogin.reset()
  } else {
    document.querySelector("#formulario-login .mensaje-usuario").classList.add("mensaje-usuario-activo")
  }
})

// //TODO EL LOGIN DEL USUARIO

// const formulario = document.getElementById('formulario')
// const inputs = document.querySelectorAll('#formulario input')

// const mostrarClave = document.querySelector('#div-clave #mostrar-clave')
// const ocultarClave = document.querySelector('#div-clave #ocultar-clave')
// const inputClave = document.getElementById('clave')

// const cerrarModal = document.getElementById('cerrar-modal')

// cerrarModal.addEventListener('click', e => {
//     inputClave.type = 'password';
//     ocultarClave.classList.add('ocultar');
//     mostrarClave.classList.remove('ocultar');
//     formulario.reset()
// })

// mostrarClave.addEventListener('click', e => {
//         mostrarClave.classList.add('ocultar');
//         ocultarClave.classList.remove('ocultar')
//         inputClave.type = 'text';
// })

// ocultarClave.addEventListener('click', e => {
//     ocultarClave.classList.add('ocultar');
//     mostrarClave.classList.remove('ocultar');
//     inputClave.type = 'password';
// })


// const validarFormulario = (e) => {
//     if (e.target.value != '') {
//         document.querySelector('#formulario .mensaje-usuario').classList.remove('mensaje-usuario-activo')
//         }
// }

// inputs.forEach((input) => {
//     input.addEventListener('keyup', validarFormulario)
//     input.addEventListener('blur', validarFormulario)
// })

// formulario.addEventListener('submit', (e) => {
//     e.preventDefault()

//     let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

//     usuarios.push({ nombre: "Administrador", email: "admin@correo", clave: "1234" })
//     usuarios.push({ nombre:"Andrea", email: "andrea@correo", clave: "1111" })

//     localStorage.setItem('usuario', JSON.stringify(usuarios))

//     const email = document.getElementById('email').value
//     const clave = document.getElementById('clave').value
    
//     let usuarioLogueado = usuarios.find(usuario => usuario.email === email && usuario.clave === clave)

//     if (usuarioLogueado) {
//         window.location.href = 'principal.html'
//         formulario.reset()
//         localStorage.setItem('usuario_logueado', JSON.stringify(usuarioLogueado))
//     } else {
//         document.querySelector('#formulario .mensaje-usuario').classList.add('mensaje-usuario-activo')
//     }
// })