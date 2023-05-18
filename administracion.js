//PARA QUE SOLO PUEDA INGRESAR A LA PÁGINA DE ADMINISTRACIÓN EL ADMINISTRADOR

let usuarioLogueado = JSON.parse(localStorage.getItem('usuario_logueado')) || false

if (!usuarioLogueado || usuarioLogueado.email != 'admin@correo') {
    window.location.href = 'principal.html'
}