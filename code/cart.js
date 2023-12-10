let cart = [];

function addToCart(name, price) {
  const quantityInput = document.getElementById(name + '-quantity');
  const quantity = parseInt(quantityInput.value);

  if (quantity > 0 && quantity <= 10) {
    // Check if the product is already in the cart
    const existingItemIndex = cart.findIndex(item => item.name === name);

    if (existingItemIndex !== -1) {
      // If the product already exists, update the quantity
      cart[existingItemIndex].quantity += quantity;
    } else {
      // If the product is not in the cart, add a new item
      const item = {
        name: name,
        price: price,
        quantity: quantity
      };
      cart.push(item);
    }

    updateCart();
  } else {
    alert('Quantity must be between 1 and 10');
  }
}


function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function incrementQuantity(index) {
  cart[index].quantity++;
  updateCart();
}

function decrementQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
    updateCart();
  }
}

function updateCart() {
  const cartContainer = document.getElementById('cart');
  cartContainer.innerHTML = '';

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Cart is empty</p>';
    return;
  }

  const table = document.createElement('table');
  const headerRow = table.insertRow();
  const headerName = headerRow.insertCell(0);
  const headerQuantity = headerRow.insertCell(1);
  const headerTotal = headerRow.insertCell(2);
  const headerAction = headerRow.insertCell(3);

  headerName.textContent = 'Product';
  headerQuantity.textContent = 'Quantity';
  headerTotal.textContent = 'Total';
  headerAction.textContent = 'Action';

  let total = 0;

  cart.forEach((item, index) => {
    const row = table.insertRow();
    const cellName = row.insertCell(0);
    const cellQuantity = row.insertCell(1);
    const cellTotal = row.insertCell(2);
    const cellAction = row.insertCell(3);

    cellName.textContent = item.name;
    cellQuantity.textContent = item.quantity;
    const itemTotal = item.price * item.quantity;
    cellTotal.textContent = `$${itemTotal.toFixed(2)}`;

    total += itemTotal;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => removeItem(index);

    const incrementButton = document.createElement('button');
    incrementButton.textContent = '+';
    incrementButton.onclick = () => incrementQuantity(index);

    const decrementButton = document.createElement('button');
    decrementButton.textContent = '-';
    decrementButton.onclick = () => decrementQuantity(index);

    cellAction.appendChild(removeButton);
    cellAction.appendChild(incrementButton);
    cellAction.appendChild(decrementButton);
  });

  const totalRow = table.insertRow();
  const totalLabelCell = totalRow.insertCell(0);
  const totalValueCell = totalRow.insertCell(1);
  const totalActionCell = totalRow.insertCell(2);

  totalLabelCell.textContent = 'Total';
  totalValueCell.textContent = `$${total.toFixed(2)}`;
  totalActionCell.textContent = '';

  cartContainer.appendChild(table);
}
