
let cart = []

function init() {
    renderDishes();
    renderDrinks();
    renderToppings();
    renderDesserts();
}

function renderDishes() {
    let dishesRef = document.getElementById('dishesContent')
    dishesRef.innerHTML = "";

    for (let indexDishes = 0; indexDishes < myDishes[0].menu.dishes.length; indexDishes++) {
        dishesRef.innerHTML += getDishTemplate(indexDishes);
    }
}

function renderDrinks() {
    let drinksRef = document.getElementById('drinksContent')
    drinksRef.innerHTML = "";

    for (let indexDrinks = 0; indexDrinks < myDishes[0].menu.drinks.length; indexDrinks++) {
        drinksRef.innerHTML += getDrinkTemplate(indexDrinks);

    }
}

function renderToppings() {
    let toppingsRef = document.getElementById('toppingsContent')
    toppingsRef.innerHTML = "";

    for (let indexToppings = 0; indexToppings < myDishes[0].menu.toppings.length; indexToppings++) {
        toppingsRef.innerHTML += getToppingTemplate(indexToppings);
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
}
