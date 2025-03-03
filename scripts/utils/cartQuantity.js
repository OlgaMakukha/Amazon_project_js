import { cart } from '../../data/cart.js';

export function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    const cartQuantityElement = document.querySelector('.js-cart-quantity');
    if (cartQuantityElement) {
        cartQuantityElement.innerHTML = cartQuantity;
    }

    const returnToHomeLink = document.querySelector('.js-return-to-home-link');
    if (returnToHomeLink) {
        returnToHomeLink.innerHTML = `${cartQuantity} items`;
    }
}