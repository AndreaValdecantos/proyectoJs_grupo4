//TODO EL LOGIN DEL USUARIO, se necesita el localStorage del registro

const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input')

const mostrarClave = document.querySelector('#div-clave #mostrar-clave')
const ocultarClave = document.querySelector('#div-clave #ocultar-clave')
const inputClave = document.getElementById('clave')

const cerrarModal = document.getElementById('cerrar-modal')

cerrarModal.addEventListener('click', e => {
    inputClave.type = 'password';
    ocultarClave.classList.add('ocultar');
    mostrarClave.classList.remove('ocultar');
    formulario.reset()
})

mostrarClave.addEventListener('click', e => {
        mostrarClave.classList.add('ocultar');
        ocultarClave.classList.remove('ocultar')
        inputClave.type = 'text';
})

ocultarClave.addEventListener('click', e => {
    ocultarClave.classList.add('ocultar');
    mostrarClave.classList.remove('ocultar');
    inputClave.type = 'password';
})


const validarFormulario = (e) => {
    if (e.target.value != '') {
        document.querySelector('#formulario .mensaje-usuario').classList.remove('mensaje-usuario-activo')
        }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

    usuarios.push({ nombre: "Administrador", email: "admin@correo", clave: "1234" })
    usuarios.push({ nombre:"Andrea", email: "andrea@correo", clave: "1111" })

    localStorage.setItem('usuario', JSON.stringify(usuarios))

    const email = document.getElementById('email').value
    const clave = document.getElementById('clave').value
    
    let usuarioLogueado = usuarios.find(usuario => usuario.email === email && usuario.clave === clave)

    if (usuarioLogueado) {
        window.location.href = 'principal.html'
        formulario.reset()
        localStorage.setItem('usuario_logueado', JSON.stringify(usuarioLogueado))
    } else {
        document.querySelector('#formulario .mensaje-usuario').classList.add('mensaje-usuario-activo')
    }
})