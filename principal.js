let usuarioLogueado = JSON.parse(localStorage.getItem('usuario_logueado')) || false
let botonLogin = document.getElementById('boton-login')
let botonLogout = document.getElementById('boton-logout')
let paginaAdministracion = document.getElementById('pagina-administracion')

if (!usuarioLogueado) { //no logueado
    botonLogout.classList.add('boton-logout-ocultar')
    paginaAdministracion.classList.add('pag-administracion-ocultar')
    botonLogin.classList.remove('boton-login-ocultar')
} else { //logueado
    botonLogin.classList.add('boton-login-ocultar')
    botonLogout.classList.remove('boton-logout-ocultar')
    if (usuarioLogueado.nombreUsuario == 'admin@correo') {
        paginaAdministracion.classList.remove('pag-administracion-ocultar')
    } else {
        paginaAdministracion.classList.add('pag-administracion-ocultar')
    }
}