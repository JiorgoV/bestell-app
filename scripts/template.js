
function getDishTemplate(indexDishes){
    return `<div class="dish-card">
        <div class="dish-description">
            <h3>${myDishes[0].menu.dishes[indexDishes].name}</h3>
            <p>${myDishes[0].menu.dishes[indexDishes].description}</p>
        </div>
        <div class="button-price">
            <button class="add-button" onclick="addToCart(${indexDishes}, 'dishes')">+</button>
            <p class="price">${myDishes[0].menu.dishes[indexDishes].price.toFixed(2)}€</p>
        </div>
    </div>
    `
}

function getDrinkTemplate(indexDrinks) {
    return `<div class="dish-card">
        <div class="dish-description">
            <h3>${myDishes[0].menu.drinks[indexDrinks].name}</h3>
        </div>
        <div class="button-price">
            <button class="add-button" onclick="addToCart(${indexDrinks}, 'drinks')">+</button>
            <p class="price">${myDishes[0].menu.drinks[indexDrinks].price.toFixed(2)}€</p>
        </div>
    </div>
    `
}

function getToppingTemplate(indexToppings) {
    return `<div class="dish-card">
        <div class="dish-description">
            <h3>${myDishes[0].menu.toppings[indexToppings].name}</h3>
        </div>
        <div class="button-price">
            <button class="add-button" onclick="addToCart(${indexToppings}, 'toppings')">+</button>
            <p class="price">${myDishes[0].menu.toppings[indexToppings].price.toFixed(2)}€</p>
        </div>
    </div>
    `
}

function getDessertTemplate(indexDesserts) {
    return `<div class="dish-card">
        <div class="dish-description">
            <h3>${myDishes[0].menu.desserts[indexDesserts].name}</h3>
            <p>${myDishes[0].menu.desserts[indexDesserts].description}</p>
        </div>
        <div class="button-price">
            <button class="add-button" onclick="addToCart(${indexDesserts}, 'desserts')">+</button>
            <p class="price">${myDishes[0].menu.desserts[indexDesserts].price.toFixed(2)}€</p>
        </div>
    </div>
    `
}

function getCartItemTemplate(indexCart) {
    return `<div class="cart-item">
        <p>${cart[indexCart].name}</p>
        <p>${cart[indexCart].quantity}x ${cart[indexCart].price}€</p>
        <div id="basket_sum"></div>
    </div>`;
}
