let usuarioLogueado = JSON.parse(localStorage.getItem('usuario_logueado')) || false

if (!usuarioLogueado || usuarioLogueado.nombreUsuario != 'admin@correo') {
    window.location.href = 'principal.html'
}