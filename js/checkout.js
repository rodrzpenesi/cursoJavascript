/*const mainn = document.querySelector("main")

devolverCarrito ()


function cargarProductoCarrito () {
    if(carrito.length>0){
        carrito.forEach ((producto)=>{
            mainn.innerHTML += crearCarritoCards(producto)
        })
    }
}
cargarProductoCarrito ()
devolverCarrito ()*/
const agregarProductCarrito = document.querySelectorAll('.card-boton');
agregarProductCarrito.forEach((addButton) => {
    addButton.addEventListener('click', aggBtnClicked);
});
function aggBtnClicked(event) {
    const button = event.target;
    const item = button.closest('.card');
    const cardTitulo = item.querySelector('.card-titulo').textContent;
    const cardPrecio = item.querySelector('.card-precio').textContent;
    const cardImg = item.querySelector('.card-img').src;
    agregarItemCarrito(cardTitulo, cardPrecio, cardImg);
}
const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');

function agregarItemCarrito (cardTitulo, cardPrecio, cardImg) {
    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
        'shoppingCartItemTitle');
    for (let i = 0; i < elementsTitle.length; i++) {
        if (elementsTitle[i].innerText === cardTitulo) {
            let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector(
            '.shoppingCartItemQuantity');
            elementQuantity.value++;
            calcularTotalCarrito();
        return;
    }
}
    const carritoRow = document.createElement('div');
    const shoppingCartContent = `
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
    carritoRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(carritoRow);
    carritoRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);
function removeShoppingCartItem(event) {
        const buttonClicked = event.target;
        buttonClicked.closest('.shoppingCartItem').remove();
        calcularTotalCarrito();
}
function quantityChanged(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null;
    calcularTotalCarrito();
}

    carritoRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);
calcularTotalCarrito();
function calcularTotalCarrito() {
        let total = 0;
        const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
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
        shoppingCartTotal.innerHTML = `$${total .toFixed(2)}`;
}
};
