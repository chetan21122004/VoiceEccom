import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: "Smartphone", price: 699, description: "Latest model with advanced features" },
  { id: 2, name: "Laptop", price: 1299, description: "Powerful and lightweight for work and play" },
  { id: 3, name: "Headphones", price: 199, description: "Noise-cancelling with superior sound quality" },
  { id: 4, name: "Smartwatch", price: 299, description: "Track your fitness and stay connected" },
  { id: 5, name: "Tablet", price: 499, description: "Perfect for entertainment and productivity on-the-go" },
];

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCart = () => {
    // In a real app, this would add the product to the cart
    console.log(`Added ${product.name} to cart`);
    navigate('/cart');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
      <p className="mb-4">{product.description}</p>
      <p className="text-2xl font-bold mb-4">${product.price}</p>
      <button
        onClick={addToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;