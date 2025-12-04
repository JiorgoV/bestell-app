
function getDishTemplate(indexDishes, category) {
    return `<div class="dish-card">
        <div class="dish-description">
            <h3>${myDishes[0].menu[category][indexDishes].name}</h3>
            <p>${myDishes[0].menu[category][indexDishes].description}</p>
        </div>
        <div class="button-price">
            <button class="add-button" onclick="addToCart(${indexDishes}, '${category}')">+</button>
            <p class="price">${myDishes[0].menu[category][indexDishes].price.toFixed(2)}€</p>
        </div>
    </div>
    `
}

function getToppingTemplate(indexToppings, category) {
    return `<div class="dish-card">
        <div class="dish-description">
            <h3>${myDishes[0].menu[category][indexToppings].name}</h3>
        </div>
        <div class="button-price">
            <button class="add-button" onclick="addToCart(${indexToppings}, '${category}')">+</button>
            <p class="price">${myDishes[0].menu[category][indexToppings].price.toFixed(2)}€</p>
        </div>
    </div>
    `
}

function getDrinkTemplate(indexDrinks, category) {
    return `<div class="dish-card">
        <div class="dish-description">
            <h3>${myDishes[0].menu[category][indexDrinks].name}</h3>
        </div>
        <div class="button-price">
            <button class="add-button" onclick="addToCart(${indexDrinks}, '${category}')">+</button>
            <p class="price">${myDishes[0].menu[category][indexDrinks].price.toFixed(2)}€</p>
        </div>
    </div>
    `
}


function getDessertTemplate(indexDesserts, category) {
    return `<div class="dish-card">
        <div class="dish-description">
            <h3>${myDishes[0].menu[category][indexDesserts].name}</h3>
            <p>${myDishes[0].menu[category][indexDesserts].description}</p>
        </div>
        <div class="button-price">
            <button class="add-button" onclick="addToCart(${indexDesserts}, '${category}')">+</button>
            <p class="price">${myDishes[0].menu[category][indexDesserts].price.toFixed(2)}€</p>
        </div>
    </div>
    `
}

function getCartItemTemplate(indexCart) {
    let itemTotalPrice = cart[indexCart].price * cart[indexCart].quantity;

    return `<div class="cart-item">
        <div class="cart-item-name">
            <p>${cart[indexCart].name}</p>
        </div>
        <div class="cart-calculator">
            <div class="item-quantity">
                <button class="minus-button" onclick="decreaseQuantity(${indexCart})">-</button>
                <p>${cart[indexCart].quantity}x</p>
                <button class="plus-button" onclick="increaseQuantity(${indexCart})">+</button>
            </div>   
            <div class="item-price">
                <p>${itemTotalPrice.toFixed(2)}€</p>
            </div>
            <button class="trash-button" onclick="deleteFromBasket(${indexCart})">🗑️</button>
        </div>
    </div>`;
}