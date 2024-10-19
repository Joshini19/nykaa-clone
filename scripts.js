// Initialize cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count in header
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Add to cart functionality
function addToCart(id, name, price) {
    cart.push({ id, name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert('${name} added to cart!');
}

// Display cart items on cart.html
function displayCartItems() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let total = 0;

    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    totalPriceElement.innerText = total.toFixed(2);
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
}

// Search for products based on search input
function searchProducts() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Sign In Modal Logic
function toggleSignIn() {
    const modal = document.getElementById('sign-in-form');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Sign In Function
function signIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        localStorage.setItem('user', JSON.stringify({ email }));
        alert('Signed in as ${email}');
        document.getElementById('sign-in-link').innerText = 'Signed In (${email})';
        toggleSignIn();
    } else {
        alert('Please enter both email and password.');
    }
}

// Run on cart page
if (window.location.pathname.includes('cart.html')) {
    displayCartItems();
}

// Update cart count and check if user is signed in on page load
updateCartCount();

const user = JSON.parse(localStorage.getItem('user'));
if (user) {
    document.getElementById('sign-in-link').innerTe
}