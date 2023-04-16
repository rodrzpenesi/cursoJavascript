const conteiner = document.getElementById("conteiner")
const precios = [   { nombre: "Matambre", precio: 3960},
                    { nombre: "Bondiola", precio: 4000 },
                    { nombre: "Chorizo", precio: 1280 },
                    { nombre: "Pierna", precio: 8500 },
                    { nombre: "Paleta", precio: 3100 },
                    { nombre: "Costillar", precio: 4160 },
                    { nombre: "Carre", precio: 3810 },]

function cargarProducto () {
    productos.forEach ((producto)=>{
        conteiner.innerHTML += crearCard(producto)
    })
}
function calcularTotalPieza() {
    let precioProductos = productos.map((producto)=> {
        return {
                nombre: producto.nombre,
                total: (producto.precio * producto.peso),
            }
    })
    console.table(precioProductos)
}

function productoComprar (){
    let producto1= prompt("que producto desea comprar?")
    let cantidad = parseInt(prompt("cuantas unidades desea comprar?:"))
    if (producto1=== "matambre"){
        let total = (cantidad * 3960)
        console.log(total + "$ "+"serian los " + cantidad +" " + producto1)
    } else if (producto1=== "bondiola"){
        let total = (cantidad * 4000)
        console.log(total + "$ "+"serian las " + cantidad +" " + producto1)
    }else if (producto1=== "chorizo"){
        let total = (cantidad * 1280)
        console.log(total + "$ "+"serian los " + cantidad +" kg de " + producto1)
    }else if (producto1=== "pierna"){
        let total = (cantidad * 8500)
        console.log(total + "$ "+"serian las " + cantidad +" " + producto1)
    }else if (producto1=== "paleta"){
        let total = (cantidad * 3100)
        console.log(total + "$ "+"serian las " + cantidad +" " + producto1)
    }else if (producto1=== "costillar"){
        let total = (cantidad * 4160)
        console.log(total + "$ "+"serian los " + cantidad +" " + producto1)
    }else if (producto1=== "carre"){
        let total = (cantidad * 3810)
        console.log(total + "$ "+"serian los " + cantidad +" " + producto1)
    } else {
        console.warn("ese producto no se encuentra disponible")
    }
}

function productoEnStock() {
    let nombreProducto = prompt("Ingresa el nombre del producto a buscar:").toUpperCase()
    console.log(nombreProducto)
    let siHay = productos.some((producto)=> {
        return producto.nombre === nombreProducto
    })
    if (siHay === false) {
        alert("⛔️ No se encontró ese producto.")
    } else {
        alert("✅ El producto esta en stock.")
    }
}

function calcularDescuento(){
    let valor = parseInt(prompt("ingrese el total de su pedido:"))
    if (valor > 0){
        let totalPedido = (valor * descuento)
        console.log(totalPedido + "$ es el importe con descuento")
    }else {
        console.warn("el valor ingresado es incorrecto")
    } 
}
function calcularInteres(){
    let valor = parseInt(prompt("ingrese el total de su pedido:"))
    if (valor > 0){
        let totalPedido = (valor * interes)
        console.log(totalPedido + "$ es el importe con intereses")
    }else {
        console.warn("el valor ingresado es incorrecto")
    } 
}   
function activarBotonComprar() {
    const botonComprar = document.querySelectorAll("button.btn.btn-success")
        for (boton of botonComprar) {
            boton.addEventListener ("click", (e)=> {
                console.log(e.target.id)
            })
        }
}
cargarProducto ();
activarBotonComprar();
/*const btnSuccess = document.querySelector("button.btn-success")
    btnSuccess.addEventListener("click" , ()=> {
        location.href = "carrito.html"
    }
    )
*/
