let cart = [];

// Function to update the cart table
function updateCart() {
    const cartTable = document.getElementById('cart-items');
    const grandTotalEl = document.getElementById('grand-total');
    let grandTotal = 0;
    cartTable.innerHTML = '';

    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>₹${item.price}</td>
            <td>₹${item.quantity * item.price}</td>
            <td><button onclick="removeFromCart(${index})">Remove</button></td>
        `;
        cartTable.appendChild(row);
        grandTotal += item.quantity * item.price;
    });

    grandTotalEl.textContent = `Grand Total: ₹${grandTotal}`;
}

// Function to add an item to the cart
function addToCart() {
    const name = document.getElementById('medicine-name').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    if (!name || isNaN(price) || isNaN(quantity)) {
        alert('Please complete the billing form!');
        return;
    }

    cart.push({ name, price, quantity });
    updateCart();
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

document.getElementById('add-to-cart').addEventListener('click', addToCart);
document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    alert('Checkout successful!');
    cart = [];
    updateCart();
});
