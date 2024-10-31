// src/components/ProductPage.js

import React from 'react';
import './ProductPage.css';
import { useNavigate } from 'react-router-dom';

function ProductPage({ addToCart }) {
  const navigate = useNavigate();

   const products = [
    {
      id: 1,
      name: 'Organic Seeds',
      price: 10,
      discount: 2,
      imageUrl: './images/seeds.jpeg',
    },
    {
      id: 2,
      name: 'Fertilizer',
      price: 25,
      discount: 3,
      imageUrl: './images/fertilizer.jpeg',
    },
    {
      id: 3,
      name: 'Irrigation Tools',
      price: 25,
      discount: 5,
      imageUrl: './images/tools.jpeg',
    },
    {
      id: 4,
      name: 'Pesticides',
      price: 20,
      discount: 4,
      imageUrl: './images/pesticides.jpeg',
    },
    {
      id: 5,
      name: 'Gardening Gloves',
      price: 12,
      discount: 2,
      imageUrl: './images/gloves.jpeg',
    },
    {
      id: 6,
      name: 'Planting Trowel',
      price: 8,
      discount: 1,
      imageUrl: './images/trowel.jpeg',
    },
    {
      id: 7,
      name: 'Soil Test Kit',
      price: 18,
      discount: 4,
      imageUrl: './images/soil test kit.jpeg',
    },
    {
      id: 8,
      name: 'Compost Bin',
      price: 30,
      discount: 5,
      imageUrl: './images/compostbin.jpeg',
    },
    {
      id: 9,
      name: 'Garden Rake',
      price: 15,
      discount: 3,
      imageUrl: './images/rake.jpeg',
    },
    {
      id: 10,
      name: 'Watering Can',
      price: 12,
      discount: 2,
      imageUrl: './images/watering can.jpeg',
    },
    {
      id: 11,
      name: 'Seedling Tray',
      price: 10,
      discount: 2,
      imageUrl: './images/seedling tray.jpeg',
    },
    {
      id: 12,
      name: 'Garden Hoe',
      price: 18,
      discount: 3,
      imageUrl: './images/garden hoe.jpeg',
    },
    {
      id: 13,
      name: 'Mulch',
      price: 20,
      discount: 5,
      imageUrl: './images/mulch.jpeg',
    },
    {
      id: 14,
      name: 'Pruning Shears',
      price: 25,
      discount: 6,
      imageUrl: './images/pruning shears.jpeg',
    },
    {
      id: 15,
      name: 'Sprinkler System',
      price: 45,
      discount: 10,
      imageUrl: './images/sprinklers.jpeg',
    },
    {
      id: 16,
      name: 'Garden Spade',
      price: 20,
      discount: 5,
      imageUrl: './images/spade.jpeg',
    },
    {
      id: 17,
      name: 'Fencing Materials',
      price: 50,
      discount: 15,
      imageUrl: './images/fencing.jpeg',
    },
    {
      id: 18,
      name: 'Crop Protection Net',
      price: 15,
      discount: 2,
      imageUrl: './images/crop net.jpeg',
    },
    {
      id: 19,
      name: 'Garden Cart',
      price: 100,
      discount: 20,
      imageUrl: './images/cart.jpeg',
    },
    {
      id: 20,
      name: 'Organic Herbicide',
      price: 12,
      discount: 1,
      imageUrl: './images/herbicide.jpeg',
    },
  ];

  return (
    <div className="product-page">
      <h1>Available Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">Price: ${product.price}</p>
            <p className="product-discount">Discount: ${product.discount}</p>
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/cart')} className="go-to-cart-button">
        Go to Cart
      </button>
    </div>
  );
}

export default ProductPage;
