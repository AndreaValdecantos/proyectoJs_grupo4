//PARA MOSTRAR EL NOMBRE DEL USUARIO QUE ENTRÓ A SU CUENTA, EN EL MENÚ DESPLEGABLE DEL NAV

if (usuarioLogueado) {
    let nombreDelUsuario = usuarioLogueado.nombre
    let mainPrincipal = document.getElementById('login')
    let mostrarNombre = document.createElement('p')
    mostrarNombre.innerHTML = nombreDelUsuario
    mainPrincipal.appendChild(mostrarNombre)
}