function crearCards(producto){
    return `<div class="card">
            <div class="container">
                <img src="${producto.imagen}" alt="" style="width:300px" class="card-img">
                <h4 class="card-titulo"><b>${producto.nombre}</b></h4>
                <p class="card-precio">$${producto.precio}</p>
            </div>
            <div class="card-boton">
                <button type="submit" id="botonAgregar${producto.id}" class="btn btn-success">Comprar</button>
            </div>
            </div>`
}