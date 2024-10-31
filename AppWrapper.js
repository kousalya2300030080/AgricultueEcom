// src/components/AppWrapper.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import NextPage from './NextPage';
import ProductPage from './ProductPage';
import Cart from './Cart';
import Checkout from './Checkout';
import Profile from './Profile';

function AppWrapper() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nextpage" element={<NextPage />} />
        <Route path="/products" element={<ProductPage addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
