
let cart = []
const DELIVERY_COST = 3.50;

function init() {
    loadCart();
    renderCategory('dishesContent', 'dishes', getDishTemplate);
    renderCategory('toppingsContent', 'toppings', getToppingTemplate);
    renderCategory('drinksContent', 'drinks', getDrinkTemplate);
    renderCategory('dessertsContent', 'desserts', getDessertTemplate);
    renderCart();
    calculateTotalPrice();
}

function renderCategory(elementId, category, templateFunction) {
    let categoryRef = document.getElementById(elementId);
    categoryRef.innerHTML = "";

    for (let indexCategory = 0; indexCategory < MY_DISHES[0].menu[category].length; indexCategory++) {
        categoryRef.innerHTML += templateFunction(indexCategory, category);
    }
}

function renderCart() {
    let cartRef = document.getElementById('basket_content');
    cartRef.innerHTML = "";

    for (let indexCart = 0; indexCart < cart.length; indexCart++) {
        cartRef.innerHTML += getCartItemTemplate(indexCart);
    }

    let cartRefMobile = document.getElementById('basket_content_mobile');
    cartRefMobile.innerHTML = "";

    for (let indexCartMobile = 0; indexCartMobile < cart.length; indexCartMobile++) {
        cartRefMobile.innerHTML += getCartItemTemplate(indexCartMobile);
    }
}

function findItemInCart(itemName) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === itemName) {
            return cart[i];
        }
    }
    return null;
}

function addToCart(index, category) {
    let item = MY_DISHES[0].menu[category][index];
    let existingItem = findItemInCart(item.name);

    if (existingItem !== null) {
        existingItem.quantity++;
    } else {
        cart.push({
            "name": item.name,
            "price": item.price,
            "quantity": 1
        });
    }
    renderCart();
    calculateTotalPrice();
}

function updatePrices(subtotal, shipping, netto, mwst, total, costName) {
    document.getElementById('subtotal' + costName).innerHTML = subtotal.toFixed(2) + "€";
    document.getElementById('shipping' + costName).innerHTML = shipping.toFixed(2) + "€";
    document.getElementById('netto' + costName).innerHTML = netto.toFixed(2) + "€";
    document.getElementById('mwst' + costName).innerHTML = mwst.toFixed(2) + "€";
    document.getElementById('total' + costName).innerHTML = total.toFixed(2) + "€";
}

function calculateTotalPrice() {
    let subtotal = 0;
    for (let i = 0; i < cart.length; i++) {
        subtotal += cart[i].price * cart[i].quantity;
    }
    let shipping = 0;
    if (cart.length > 0) {
        shipping = DELIVERY_COST;
    }
    let netto = subtotal + shipping;
    let mwst = netto * 0.19;
    let total = netto + mwst;
    updatePrices(subtotal, shipping, netto, mwst, total, '');
    updatePrices(subtotal, shipping, netto, mwst, total, '_mobile');
}

function increaseQuantity(index) {
    cart[index].quantity++;

    renderCart();
    calculateTotalPrice();
    saveCart();
}

function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }

    renderCart();
    calculateTotalPrice();
    saveCart();
}

function deleteFromBasket(index) {
    cart.splice(index, 1);

    renderCart();
    calculateTotalPrice();
    saveCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
    let savedCart = localStorage.getItem("cart");

    if (savedCart !== null) {
        cart = JSON.parse(savedCart);
    }
}

function placeOrder() {
    let dialogAlert = document.getElementById('alertDialog');
    if (cart.length === 0) {
        dialogAlert.showModal();
        return;
    }
    let dialog = document.getElementById('orderDialog');
    dialog.showModal();

    cart = [];

    saveCart();
    renderCart();
    calculateTotalPrice();
}

function closeOrderDialog() {
    let dialog = document.getElementById('orderDialog');
    dialog.close();

    let dialogAlert = document.getElementById('alertDialog');
    dialogAlert.close();
}

function openBasket() {
    let basketDialog = document.getElementById('basket-dialog');
    basketDialog.showModal();
}

function closeBasket() {
    let basketDialog = document.getElementById('basket-dialog');
    basketDialog.close();
}

function getTotalCartItems() {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        total = total + cart[i].quantity;
    }
    
    return total;
}

function updateCartButton() {
    let cartQuantity = document.getElementById('cartQuantity');
    let totalItems = getTotalCartItems();

    cartQuantity.innerHTML = totalItems;

    if (totalItems > 0) {
        cartQuantity.classList.add('show');
    } else {
        cartQuantity.classList.remove('show');
    }
}