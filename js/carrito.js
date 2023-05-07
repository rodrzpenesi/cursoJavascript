const carrito = []

function guardarCarritoEnLocal () {
    if (carrito.length>0){
        localStorage.setItem("productosCarrito", JSON.stringify(carrito))
    }
}

function devolverCarrito () {
    const carritoCargado = JSON.parse(localStorage.getItem("productosCarrito"))
    if (carritoCargado !== null){
        carritoCargado.forEach(producto => {
            carrito.push(producto)
        });
    }else{
        console.log("el carrito esta vacio.")
    }
}
