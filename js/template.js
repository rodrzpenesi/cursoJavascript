function crearCards(producto){
    return `<div class="card">
        <img src="${producto.imagen}" alt="" style="width:300px" class="card-img">
        <div class="container">
            <h4 class="card-titulo"><b>${producto.nombre}</b></h4>
            <p class="card-precio">$${producto.precio}</p>
        </div>
        <div class="card-boton">
            <button type="button" class="btn btn-success">Comprar</button>
        </div>
        </div>`
}