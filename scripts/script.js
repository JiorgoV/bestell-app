
let cart = []

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
    let totalSum = 0;

    for (let i = 0; i < cart.length; i++) {
        totalSum += cart[i].price * cart[i].quantity;
    }

    let sumRef = document.getElementById('basket_sum');
    sumRef.innerHTML = `Gesamt: ${totalSum.toFixed(2)}€`;

    return totalSum;
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