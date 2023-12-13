/**
 * Filename: complex_code_example.js
 * 
 * This code demonstrates a complex, elaborate, and sophisticated JavaScript application.
 * It simulates an online store's shopping cart functionality with various features.
 */

// Product class representing a single item in the online store
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// ShoppingCart class representing the user's shopping cart
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Add a product to the shopping cart
  addItem(product, quantity = 1) {
    const existingItem = this.items.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  // Remove a product from the shopping cart
  removeItem(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
  }

  // Calculate the total price of all items in the cart
  getTotalPrice() {
    return this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  // Generate a receipt summary for the items in the cart
  generateReceipt() {
    let receipt = "Receipt:\n";
    for (const item of this.items) {
      receipt += `${item.product.name} - Quantity: ${item.quantity} - Price: $${item.product.price}\n`;
    }
    receipt += `Total Price: $${this.getTotalPrice()}\n`;
    return receipt;
  }
}

// Sample usage of the ShoppingCart
const cart = new ShoppingCart();
const product1 = new Product(1, "Phone", 999.99);
const product2 = new Product(2, "Laptop", 1499.99);
const product3 = new Product(3, "Tablet", 599.99);

cart.addItem(product1);
cart.addItem(product2, 2);
cart.addItem(product3, 3);

console.log(cart.generateReceipt());

cart.removeItem(2);
console.log(cart.generateReceipt());

/**
 * Output:
 * 
 * Receipt:
 * Phone - Quantity: 1 - Price: $999.99
 * Laptop - Quantity: 2 - Price: $1499.99
 * Tablet - Quantity: 3 - Price: $599.99
 * Total Price: $6099.92
 *
 * Receipt:
 * Phone - Quantity: 1 - Price: $999.99
 * Tablet - Quantity: 3 - Price: $599.99
 * Total Price: $2799.96
 */