const mainn = document.querySelector("main")

devolverCarrito ()


function cargarProductoCarrito () {
    if(carrito.length>0){
        carrito.forEach ((producto)=>{
            mainn.innerHTML += crearCarritoCards(producto)
        })
    }
}
cargarProductoCarrito ()
devolverCarrito ()