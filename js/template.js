/*function crearCard (producto) {
return 
`<div class="contenedor">
        <div class="card">
        <img src="${producto.imagen}" alt="" style="width:300px" class="card-img">
        <div class="container">
            <h4 class="card-titulo"><b>${producto.nombre}</b></h4>
            <p class="card-precio">$${producto.precio}</p>
        </div>
        <div class="card-boton">
            <button type="button" class="btn btn-success">Comprar</button>
        </div>
        </div>`
};


function crearCard(producto){
    return `
`<div class="contenedor">
        <div class="card">
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
/*
function crearCarritoCards(producto){
    return `<div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">${producto.nombre}</p>
                    <div inputCantidad> 
                    <label for="cantidadProductos">INGRESA LA CANTIDAD:</label>
                    <input type="number" id="cantidadProductos" value="1" min="1" max="5">
                    </div>
                </div>
            </div>`
}

function crearRowCards(producto) {
    `<div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${cardImg} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${cardTitulo}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${cardPrecio}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`
}*/
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