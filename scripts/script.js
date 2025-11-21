
function renderDishes() {
    let dishesRef = document.getElementById('dishesContent')
    dishesRef.innerHTML = "";

    for (let indexDishes = 0; indexDishes < myDishes[0].menu.dishes.length; indexDishes++) {
        dishesRef.innerHTML += getDishTemplate(indexDishes); 
    }
}

