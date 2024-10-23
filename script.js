const openMenuButton = document.getElementById('openMenuButton');
const closeMenuButton = document.getElementById('closeMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

const closeCartButton = document.getElementById('closeCartButton');
const addToCartButton = document.getElementById('addToCartButton');
const shoppingCart = document.getElementById('shoppingCart');
const shoppingCartBackgroud = document.getElementById('shoppingCartBackgroud')

openMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
});

closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});


addToCartButton.addEventListener('click', () => {
    shoppingCart.classList.remove('hidden');
    shoppingCartBackgroud.classList.remove('hidden');
});

closeCartButton.addEventListener('click', () => {
    shoppingCart.classList.add('hidden');
    shoppingCartBackgroud.classList.add('hidden');
});
