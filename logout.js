botonLogout.addEventListener('click', () =>{
    console.log('logout')
    localStorage.removeItem('usuario_logueado')
    // alert('Sesión cerrada')
    window.location.href = 'principal.html'
})