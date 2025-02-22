export const cart = [];

export function addToCart(productId) {
    let matchingItem;
    const quantityItem = document.querySelector(`.js-quantity-selector-${productId}`);
    const selectedQuantity = Number(quantityItem.value);

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    })

    if (matchingItem) {
        matchingItem.quantity += selectedQuantity;
    } else {
        cart.push({
        productId: productId,
        quantity: selectedQuantity
        })
    }
}