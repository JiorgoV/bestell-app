
let cart = []

const deliveryCost = 3.50;

function init() {
    loadCart();
    renderDishes();
    renderToppings();
    renderDrinks();
    renderDesserts();
    renderCart();
    calculateTotalPrice();
}

function renderDishes() {
    let dishesRef = document.getElementById('dishesContent')
    dishesRef.innerHTML = "";

    for (let indexDishes = 0; indexDishes < myDishes[0].menu.dishes.length; indexDishes++) {
        dishesRef.innerHTML += getDishTemplate(indexDishes);
    }
}

function renderToppings() {
    let toppingsRef = document.getElementById('toppingsContent')
    toppingsRef.innerHTML = "";

    for (let indexToppings = 0; indexToppings < myDishes[0].menu.toppings.length; indexToppings++) {
        toppingsRef.innerHTML += getToppingTemplate(indexToppings);
    }
}

function renderDrinks() {
    let drinksRef = document.getElementById('drinksContent')
    drinksRef.innerHTML = "";

    for (let indexDrinks = 0; indexDrinks < myDishes[0].menu.drinks.length; indexDrinks++) {
        drinksRef.innerHTML += getDrinkTemplate(indexDrinks);

    }
}

function renderDesserts() {
    let dessertsRef = document.getElementById('dessertsContent')
    dessertsRef.innerHTML = "";

    for (let indexDesserts = 0; indexDesserts < myDishes[0].menu.desserts.length; indexDesserts++) {
        dessertsRef.innerHTML += getDessertTemplate(indexDesserts);
    }
}

function renderCart() {
    let cartRef = document.getElementById('basket_content');
    cartRef.innerHTML = "";

    for (let indexCart = 0; indexCart < cart.length; indexCart++) {
        cartRef.innerHTML += getCartItemTemplate(indexCart);
    }
}

function addToCart(index, category) {
    let item = myDishes[0].menu[category][index];

    let existingItem = null;

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === item.name) {
            existingItem = cart[i];
            break;
        }
    }

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

function calculateTotalPrice() {
    let subtotal = 0;
    for (let i = 0; i < cart.length; i++) {
        subtotal += cart[i].price * cart[i].quantity;
    }

    let shipping = deliveryCost;

    let total = subtotal + shipping;

    document.getElementById('subtotal').innerHTML = subtotal.toFixed(2) + "€";
    document.getElementById('shipping').innerHTML = shipping.toFixed(2) + "€";
    document.getElementById('total').innerHTML = total.toFixed(2) + "€";
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
    if (cart.length === 0) {
        alert("Dein Warenkorb ist leer!");
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
}
