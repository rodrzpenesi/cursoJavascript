
function crearCard(producto){
    return `
    <div class="contenedor">
        <div class="card">
            <img src="${producto.imagen}" alt="" style="width:300px" class="img">
            <div class="container">
                <h4><b>${producto.nombre}</b></h4>
                <p>Pesan ${producto.peso}kg</p>
                <p>$${producto.precio}</p>
            </div>
            <div class="card-boton">
                <button type="button" class="btn btn-success">Comprar</button>
            </div>
        </div>
    </div>`
}