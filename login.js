const usuario = {
    nombreUsuario: 'admin',
    clave: '1234'
}

const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input')

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, //letras,número, guión y guión bajo
    clave: /^.{4,12}$/ //4 a 12 dígitos
}

const campos = {
    usuario: false,
    clave: false
}

const validarFormulario = (e) => {
    if (e.target.value != '') {
        document.querySelector('#formulario .mensaje-formulario').classList.remove('mensaje-formulario-activo')

        switch (e.target.name) { //accede al name del input
            case "usuario":
                if (expresiones.usuario.test(e.target.value)) { //test comprueba el texto ingresado respecto a la expresión regular especificada... target.value accede al valor del input
                    document.getElementById('div-usuario').classList.remove('form-control-incorrecto')
                    document.getElementById('div-usuario').classList.add('form-control-correcto')
                    document.querySelector('#div-usuario .mensaje-error').classList.remove('mensaje-error-activo')
                    campos.usuario = true
                    document.querySelector('#formulario .mensaje-usuario').classList.remove('mensaje-usuario-activo')
                } else {
                    document.getElementById('div-usuario').classList.add('form-control-incorrecto')
                    document.getElementById('div-usuario').classList.remove('form-control-correcto')
                    document.querySelector('#div-usuario .mensaje-error').classList.add
                        ('mensaje-error-activo')
                        document.querySelector('#formulario .mensaje-usuario').classList.remove('mensaje-usuario-activo')
                    campos.usuario = false
                }
                break;
            case "clave":
                if (expresiones.clave.test(e.target.value)) {
                    document.getElementById('div-clave').classList.remove('form-control-incorrecto')
                    document.getElementById('div-clave').classList.add('form-control-correcto')
                    document.querySelector('#div-clave .mensaje-error').classList.remove('mensaje-error-activo')
                    campos.clave = true
                    document.querySelector('#formulario .mensaje-usuario').classList.remove('mensaje-usuario-activo')
                } else {
                    document.getElementById('div-clave').classList.add('form-control-incorrecto')
                    document.getElementById('div-clave').classList.remove('form-control-correcto')
                    document.querySelector('#div-clave .mensaje-error').classList.add('mensaje-error-activo')
                    document.querySelector('#formulario .mensaje-usuario').classList.remove('mensaje-usuario-activo')
                    campos.clave = false
                }
                break;
        }
    } else {
        document.getElementById('div-usuario').classList.remove('form-control-incorrecto')
        document.getElementById('div-usuario').classList.remove('form-control-correcto')
        document.getElementById('div-clave').classList.remove('form-control-incorrecto')
        document.getElementById('div-clave').classList.remove('form-control-correcto')
        document.querySelector('#div-usuario .mensaje-error').classList.remove('mensaje-error-activo')
        document.querySelector('#div-clave .mensaje-error').classList.remove('mensaje-error-activo')
    }

}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})


formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombreUsuario = document.getElementById('usuario').value
    const clave = document.getElementById('clave').value

    if (campos.usuario == true && campos.clave == true) {
        if (nombreUsuario == usuario.nombreUsuario && clave == usuario.clave) {
            window.location.href = 'index.html'
        } else {
            document.querySelector('#formulario .mensaje-usuario').classList.add('mensaje-usuario-activo')
        }
        // formulario.reset() //reinicia todos los campos del formulario
    } else {
        document.querySelector('#formulario .mensaje-formulario').classList.add('mensaje-formulario-activo')
        document.querySelector('#formulario .mensaje-usuario').classList.remove('mensaje-usuario-activo')
    }
})



//     let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

//     let usuarioValido = usuarios.find(usuarios => usuarios.usuario === usuario && usuarios.clave === clave)

//     if (!usuarioValido) {
//         usuario = ""
//         clave = ""
//         alert('Usuario y/o contraseña incorrectos')
//     } else {
//         alert('¡Bienvenido!')
//         localStorage.setItem('login_exitoso', JSON.stringify(usuarioValido))
//         window.location.href = 'index.html'
//     }
// })