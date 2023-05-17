const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input')

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

    usuarios.push({ nombreUsuario: "admin@correo", clave: "1234" })
    usuarios.push({ nombreUsuario: "andrea@correo", clave: "1111" })

    localStorage.setItem('usuario', JSON.stringify(usuarios))

    const nombreUsuario = document.getElementById('usuario').value
    const clave = document.getElementById('clave').value
    
    let usuarioLogueado = usuarios.find(usuario => usuario.nombreUsuario === nombreUsuario && usuario.clave === clave)

    if (usuarioLogueado) {
        window.location.href = 'principal.html'
        formulario.reset()
        localStorage.setItem('usuario_logueado', JSON.stringify(usuarioLogueado))
    } else {
        document.querySelector('#formulario .mensaje-usuario').classList.add('mensaje-usuario-activo')
    }
})