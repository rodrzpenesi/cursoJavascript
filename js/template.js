function crearCards(producto){
    return `<div class="card .contenedor .heroCarro">
            <div class="container .contenedor">
                <img src="${producto.imagen}" alt="" style="width:300px" class="card-img">
                <h4 class="card-titulo"><b>${producto.nombre}</b></h4>
                <p class="card-precio">$${producto.precio}</p>
            </div>
            <div class="card-boton">
                <button type="submit" id="miBoton" class="btn btn-success">Comprar</button>
            </div>
            </div>`
}
/*function crearCards2(carrito){
    return `<div class="card .contenedor .heroCarro .shoppingCartItem">
            <div class="container .contenedor">
            <img src="${carrito.img}" alt="" style="width:300px" class="card-img">
                <h4 class="card-titulo"><b>${carrito.nombre}</b></h4>
                <p class="card-precio">${carrito.cantidad} unidades</p>
                <p class="card-precio">${carrito.precio}</p>
            </div>
            <div class="card-boton">
                <button type="submit" id="botonAgregar${carrito.id}" class="btn btn-danger buttonDelete">Quitar</button>
            </div>
            </div>`
}*/
function crearCards2(carrito){
    return `<div class="row shoppingCartItem" id="shoppingCartItem">
    <div class="col-6">
        <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <img src=${carrito.img} class="shopping-cart-image">
            <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${carrito.nombre}</h6>
        </div>
    </div>
    <div class="col-2">
        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <p class="item-price mb-0 shoppingCartItemPrice">${carrito.precio}</p>
        </div>
    </div>
    <div class="col-4">
        <div
            class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
            <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                value="${carrito.cantidad}">
            <button class="btn btn-danger buttonDelete" id="botonBorrar" type="button">X</button>
        </div>
    </div>
</div>`
}
