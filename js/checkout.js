const agregarProductCarrito = document.querySelectorAll('.shopping-cart-quantity');
agregarProductCarrito.forEach((addButton) => {
    addButton.addEventListener('click', aggBtnClicked);
});

function aggBtnClicked(event) {
    const button = event.target;
    const item = button.closest('.row');
    const cardTitulo = item.querySelector('.shopping-cart-item-title').textContent;
    const cardPrecio = item.querySelector('.shoppingCartItemPrice').textContent;
    const cardImg = item.querySelector('.shopping-cart-image').src;
    agregarItemCarrito(cardTitulo, cardPrecio, cardImg);
}

const elementosCarritoCompra = document.querySelector('.elementosCarritoCompra');

function agregarItemCarrito (cardTitulo, cardPrecio, cardImg) {
    const elementosCarrito = elementosCarritoCompra.getElementsByClassName(
        '.shoppingCartItemTitle');
    for (let i = 0; i < elementosCarrito.length; i++) {
        if (elementosCarrito[i].innerText === cardTitulo) {
            let cantidadProduct = elementosCarrito[i].parentElement.parentElement.parentElement.querySelector(
            '.shoppingCartItemQuantity');
            cantidadProduct.value++;
            calcularTotalCarrito();
        return;
    }
}
    const carritoRow = document.querySelectorAll('shoppingCartItem');
    const templateCards = `
<div class="row shoppingCartItem">
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
    </div>`;
    carritoRow.innerHTML = templateCards;
    elementosCarritoCompra.append(carritoRow);
    carritoRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removerItemCarrito);
function removerItemCarrito(event) {
        const buttonClicked = event.target;
        buttonClicked.closest('.shoppingCartItem').remove();
        calcularTotalCarrito();
        removeArray();

}
function cambiarCantidad(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null;
    calcularTotalCarrito();
}

    carritoRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', cambiarCantidad);
calcularTotalCarrito();
function calcularTotalCarrito() {
        let total = 0;
        const totalDelCarrito = document.querySelector('.shoppingCartTotal');
        const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

        shoppingCartItems.forEach((shoppingCartItem) => {
            const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
            '.shoppingCartItemPrice');
            const shoppingCartItemPrice = Number(
            shoppingCartItemPriceElement.textContent.replace('$', ' '));
            const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
            '.shoppingCartItemQuantity');
            const shoppingCartItemQuantity = Number(
            shoppingCartItemQuantityElement.value);
            total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
        });
        totalDelCarrito.innerHTML = `$${total .toFixed(2)}`;
}
};
function metodoDePago () {
    let formaPago = document.getElementById('formaPago');
    let metodoPago = formaPago.value;
    document.getElementById('divPago').innerHTML = `USTED HA SELECCIONADO PAGAR CON ${metodoPago} <i class="bi bi-wallet2"></i> `
    infoPago();
}
function infoPago () {
    Swal.fire({
        icon: 'success',
        title: 'Muchas Gracias Por Su Compra',
        text: "PRONTO RECIBIRA UN EMAIL CON LOS PASOS A SEGUIR!",
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
}
let carrito = []
const contenedorItems = document.querySelector(".contenedor")
const rowCardis = document.querySelector(".heroCarro")


contenedorItems.addEventListener("click" , (e)=>{


    if(e.target.classList.contains("btn")){

        const product = e.target.parentElement.parentElement
      

        const productoSeleccionado = {
            cantidad: 1,
            nombre: product.querySelector("h4").innerText,
            precio: product.querySelector("p").innerText,
            img: product.querySelector("img").src,
            rendered: false
        };
        
        const exist = carrito.some(product=> product.nombre === productoSeleccionado.nombre)

        if(exist){
            const indiceEnElCarrito = carrito.findIndex(product => product.nombre === productoSeleccionado.nombre)
            const nuevoCarrito = [...carrito] 
            nuevoCarrito[indiceEnElCarrito].cantidad +=1
           
            carrito = [...nuevoCarrito]
            
        }else{
            carrito = [...carrito, productoSeleccionado]
            
        }


        
        cargarProducto2(carrito)
        actualizarCantidad(carrito)
        actualizarTotal(carrito)
        

    }
})




function actualizoStorage() { {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}
}
function removeArray () {
    carrito.pop()
}

let boton = document.getElementById("miBoton");
boton.addEventListener("click", function() {
    actualizoStorage();
});
function recuperoStorage() {
    let carritoRecupero = localStorage.getItem("carrito")
    if (carritoRecupero!== null) {
        const carritoDeStorage = JSON.parse(carritoRecupero)
        carrito = carritoDeStorage.map((item)=>{
            return {...item, rendered:false}
        })
        // carrito.push(...carritoDeStorage)
}}
const url = "js/productos.json"
const productos =[]

const obtenerProductos = () => {
    fetch(url)
        .then((Response)=>Response.json())
        .then((data)=>productos.push(...data))
        .then(()=>cargarProducto (productos))
        .then(()=>cargarProducto2 (carrito))
        .catch()
}
recuperoStorage();
obtenerProductos();