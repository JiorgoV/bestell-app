
function getTemplateWithDescription(index, category) {
    return `<div class="dish-card">
        <div class="dish-description">
            <h3>${MY_DISHES[0].menu[category][index].name}</h3>
            <p>${MY_DISHES[0].menu[category][index].description}</p>
        </div>
        <div class="button-price">
            <button class="add-button" onclick="addToCart(${index}, '${category}')">+</button>
            <p class="price">${MY_DISHES[0].menu[category][index].price.toFixed(2)}€</p>
        </div>
    </div>`;
}

function getTemplateWithoutDescription(index, category) {
    return `<div class="dish-card">
        <div class="dish-description">
            <h3>${MY_DISHES[0].menu[category][index].name}</h3>
        </div>
        <div class="button-price">
            <button class="add-button" onclick="addToCart(${index}, '${category}')">+</button>
            <p class="price">${MY_DISHES[0].menu[category][index].price.toFixed(2)}€</p>
        </div>
    </div>`;
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