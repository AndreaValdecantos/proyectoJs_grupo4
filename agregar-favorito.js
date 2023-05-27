const productosFavoritos = []
usuarioLogueado = JSON.parse(localStorage.getItem("usuario_logueado")) || false
const listaProductosStock = document.getElementById('caja-card-productos')
let listaFavoritos = document.getElementById('lista-favoritos')

if (usuarioLogueado) {
    let emailUsuario = usuarioLogueado.email

    listaProductosStock.addEventListener('click', (e) => {
        let bandera = false
        let productoFav = e.target

        if (productosFavoritos.length == 0) {
            agregarFavorito(productoFav.id)
        } else {
            productosFavoritos.forEach((prodFav) => {
                if (prodFav.emailUsuario == emailUsuario && prodFav.productoFavorito.id == productoFav.id) {
                    bandera = true
                }
            })
            if (bandera == false) {
                agregarFavorito(productoFav.id)
            }
        }
    })

    const agregarFavorito = (idDelProductoFav) => {
        let productoFavorito = productos.find((producto) => producto.id == idDelProductoFav)
        let productoAgregado = { emailUsuario, productoFavorito };
        productosFavoritos.push(productoAgregado)
        localStorage.setItem('favoritos', JSON.stringify(productosFavoritos))
        let tarjetaFav = document.createElement("div");
        tarjetaFav.innerHTML = `
        <div id="texto-card-producto">
        <h4 class="nombre-producto-card">${productoFavorito.tipo} ${productoFavorito.marca} ${productoFavorito.modelo}</h4>
        </div>
        <div class="ver-mas-card">
        <h5 class="precio-producto">$${productoFavorito.precio}</h5>
        <svg id="${productoFavorito.id}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-heart" viewBox="0 0 16 16">
      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
    </svg>
        </div>
        `
        listaFavoritos.appendChild(tarjetaFav)
    }

    let botonFavoritos = document.getElementById('boton-favoritos')


  botonFavoritos.addEventListener('click', (e) => {
    e.preventDefault()

    if (listaFavoritos.classList.contains('ocultar-elemento')) {
      listaFavoritos.classList.remove('ocultar-elemento')
    } else {
      listaFavoritos.classList.add('ocultar-elemento')
    }
  
  })

}