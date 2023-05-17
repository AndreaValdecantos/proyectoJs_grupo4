const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input')

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, //letras,número, guión y guión bajo
    clave: /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/ //Mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial
}

const campos = {
    usuario: false,
    clave: false
}

const validarFormulario = (e) => {
    if (e.target.value != '') {
        document.querySelector('#formulario .mensaje-usuario').classList.remove('mensaje-usuario-activo')
    //     switch (e.target.name) { //accede al name del input
    //         case "usuario":

    //             if (expresiones.usuario.test(e.target.value)) { //test comprueba el texto ingresado respecto a la expresión regular especificada... target.value accede al valor del input
    //                 document.getElementById('div-usuario').classList.remove('form-control-incorrecto')
    //                 document.getElementById('div-usuario').classList.add('form-control-correcto')
    //                 document.querySelector('#div-usuario .mensaje-error').classList.remove('mensaje-error-activo')
    //                 campos.usuario = true
    //                 document.querySelector('#formulario .mensaje-usuario').classList.remove('mensaje-usuario-activo')
    //             } else {
    //                 document.getElementById('div-usuario').classList.add('form-control-incorrecto')
    //                 document.getElementById('div-usuario').classList.remove('form-control-correcto')
    //                 document.querySelector('#div-usuario .mensaje-error').classList.add('mensaje-error-activo')
    //                 document.querySelector('#formulario .mensaje-usuario').classList.remove('mensaje-usuario-activo')
    //                 campos.usuario = false
    //             }
    //             break;
    //         case "clave":
    //             if (expresiones.clave.test(e.target.value)) {
    //                 document.getElementById('div-clave').classList.remove('form-control-incorrecto')
    //                 document.getElementById('div-clave').classList.add('form-control-correcto')
    //                 document.querySelector('#div-clave .mensaje-error').classList.remove('mensaje-error-activo')
    //                 campos.clave = true
    //                 document.querySelector('#formulario .mensaje-usuario').classList.remove('mensaje-usuario-activo')
    //             } else {
    //                 document.getElementById('div-clave').classList.add('form-control-incorrecto')
    //                 document.getElementById('div-clave').classList.remove('form-control-correcto')
    //                 document.querySelector('#div-clave .mensaje-error').classList.add('mensaje-error-activo')
    //                 document.querySelector('#formulario .mensaje-usuario').classList.remove('mensaje-usuario-activo')
    //                 campos.clave = false
    //             }
    //             break;
    //     }
    // } else {
    //     document.getElementById('div-usuario').classList.remove('form-control-incorrecto')
    //     document.getElementById('div-usuario').classList.remove('form-control-correcto')
    //     document.getElementById('div-clave').classList.remove('form-control-incorrecto')
    //     document.getElementById('div-clave').classList.remove('form-control-correcto')
    //     document.querySelector('#div-usuario .mensaje-error').classList.remove('mensaje-error-activo')
    //     document.querySelector('#div-clave .mensaje-error').classList.remove('mensaje-error-activo')
     }

}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})


formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    //accedemos a los usuarios que estén guardados en el localStorage y si no hay ningún usuario registrado devuelve un array vacío
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [] //última versión

    usuarios.push({nombreUsuario: "admin@correo", clave: "1234"}) //agrego a la lista de usuarios un usuario
    usuarios.push({nombreUsuario: "andrea@correo", clave: "1111"}) //agrego a la lista de usuarios otro usuario

    localStorage.setItem('usuario',JSON.stringify(usuarios))

    const nombreUsuario = document.getElementById('usuario').value
    const clave = document.getElementById('clave').value


    //última versión----------------
    // if (nombreUsuario == "" || clave == "") {
    //     document.querySelector('#formulario .mensaje-usuario').classList.remove('mensaje-usuario-activo')
    //     document.querySelector('#formulario .mensaje-formulario').classList.add('mensaje-formulario-activo')
    // } else {
    //     if (campos.usuario == false || campos.clave == false) {
    //         document.querySelector('#formulario .mensaje-formulario').classList.add('mensaje-formulario-activo')
    //     } else {
            let usuarioLogueado = usuarios.find(usuario => usuario.nombreUsuario === nombreUsuario && usuario.clave === clave)
            if (usuarioLogueado) {
                window.location.href = 'principal.html'
                formulario.reset()
                localStorage.setItem('usuario_logueado', JSON.stringify(usuarioLogueado))
            } else {
                document.querySelector('#formulario .mensaje-usuario').classList.add('mensaje-usuario-activo')
            }
    //     }
    // }
    //---------------

    // if (campos.usuario == true && campos.clave == true) {
    //     if (nombreUsuario == usuario.nombreUsuario && clave == usuario.clave) {
    //         window.location.href = 'index.html'
    //     } else {
    //         document.querySelector('#formulario .mensaje-usuario').classList.add('mensaje-usuario-activo')
    //         formulario.reset()
    //     }
    //     // formulario.reset() //reinicia todos los campos del formulario
    // } else {
    //     document.querySelector('#formulario .mensaje-formulario').classList.add('mensaje-formulario-activo')
    //     document.querySelector('#formulario .mensaje-usuario').classList.remove('mensaje-usuario-activo')
    // }
})



//LOCALSTORAGE

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