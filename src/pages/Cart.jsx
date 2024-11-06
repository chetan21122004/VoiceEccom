import React, { useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Smartphone", price: 699, quantity: 1 },
    { id: 2, name: "Laptop", price: 1299, quantity: 1 },
  ]);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <span>{item.name} - ${item.price} x {item.quantity}</span>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-xl font-bold mt-6">Total: ${total}</div>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;