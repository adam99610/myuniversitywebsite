function addToBasketFromOtherPage(itemSize) {
    var basketItems = JSON.parse(localStorage.getItem("basket")) || [];
    basketItems.push({ size: itemSize });
    localStorage.setItem("basket", JSON.stringify(basketItems));
}

function adddarshToBasket() {
    var selectedSize = document.getElementById("darshsize");
    console.log(document.getElementById("darshsize").ariaValueText);
    var basketItems = JSON.parse(localStorage.getItem("basket")) || [];
    basketItems.push({ size: selectedSize });
    localStorage.setItem("basket", JSON.stringify(basketItems));
    alert(document.getElementById(darshsize));
}

function adddarshToBasket2() {
    var itemImage = document.querySelector('img').src;
    var itemSize = document.getElementById("darshsize").value;

    var basketItems = document.getElementById("basket-items");
    var listItem = document.createElement("li");
    listItem.innerHTML = `
        <img src="${itemImage}" alt="Basket Item">
        <p>Size: ${itemSize}</p>
        <button onclick="removeFromBasket(this)">Remove</button>
    `;

    basketItems.appendChild(listItem);
}

function removeFromBasket(button) {
    var listItem = button.closest('li');
    listItem.remove();
}

