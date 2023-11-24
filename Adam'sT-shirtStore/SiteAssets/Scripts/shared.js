function addToBasketFromOtherPage(itemSize) {
    var basketItems = JSON.parse(localStorage.getItem("basket")) || [];
    basketItems.push({ size: itemSize });
    localStorage.setItem("basket", JSON.stringify(basketItems));
}