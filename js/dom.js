const conteiner = document.getElementById("conteiner")





function cargarProducto () {
    productos.forEach ((producto)=>{
        conteiner.innerHTML += crearCard(producto)
    })
}

function calcularTotal(){
    
}