// src/components/Cart.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css'; // Ensure to import the updated Cart.css

function Cart({ cartItems }) {
  const navigate = useNavigate();

  // Calculate the total quantity and price for each product, including discounts
  const groupedCartItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice += item.price;
    } else {
      acc.push({
        ...item,
        quantity: 1,
        totalPrice: item.price,
      });
    }
    return acc;
  }, []);

  const totalCartPrice = groupedCartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  const discountRate = 0.1; // Assuming a 10% discount for this example
  const discountAmount = totalCartPrice * discountRate;
  const finalPrice = totalCartPrice - discountAmount;

  const proceedToCheckout = () => {
    navigate('/checkout', { state: { totalCartPrice: finalPrice, discountAmount } }); // Pass total and discount to checkout
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {groupedCartItems.length > 0 ? (
        <ul>
          {groupedCartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <span>{item.name}</span>
                <span>${item.price} x {item.quantity} = ${item.totalPrice.toFixed(2)}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
      <h2>Total: ${totalCartPrice.toFixed(2)}</h2>
      <h3>Discount: -${discountAmount.toFixed(2)}</h3>
      <h2>Final Amount: ${finalPrice.toFixed(2)}</h2>
      <button onClick={proceedToCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
