const conteiner = document.getElementById("conteiner")
const conteiner2 = document.getElementById("conteinerC")


function cargarProducto () {
    productos.forEach ((producto)=>{
        conteiner.innerHTML += crearCards(producto)
    })
}

function cargarProducto2 () {
    carrito.forEach ((itemCarrito, index)=>{
        if(!carrito[index].rendered){
            conteiner2.innerHTML += crearCards2(itemCarrito)
            carrito[index].rendered =  true
        }
    })
}


function actualizarCantidad (carrito) {
    
    carrito.forEach ((itemCarrito, index)=>{
        const cantidadDOM = document.getElementById(`${`carrito${itemCarrito.nombre}`}`)

        cantidadDOM.value = itemCarrito.cantidad
    })
}


function actualizarTotal (carrito) {
    const totalDOM = document.getElementById(`precioTotal`)
    const nuevoTotal = carrito.reduce ((acumulador, item, index)=>{

        const obtenerPrecio = parseInt(item.precio.slice(1));

        const valorASumar = obtenerPrecio * item.cantidad 

        return acumulador+valorASumar
    }, 0)
    
    totalDOM.innerText = `$${nuevoTotal}`
}   