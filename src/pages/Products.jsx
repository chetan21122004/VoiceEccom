import React from 'react';
import { Link } from 'react-router-dom';
import VoiceAssistant from '../components/VoiceAssistant';

const products = [
  { id: 1, name: "Smartphone", price: 699, description: "Latest model with advanced features" },
  { id: 2, name: "Laptop", price: 1299, description: "Powerful and lightweight for work and play" },
  { id: 3, name: "Headphones", price: 199, description: "Noise-cancelling with superior sound quality" },
  { id: 4, name: "Smartwatch", price: 299, description: "Track your fitness and stay connected" },
  { id: 5, name: "Tablet", price: 499, description: "Perfect for entertainment and productivity on-the-go" },
];

function Products() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-bold mb-2">
              {product.id}. {product.name}
            </h2>
            <p className="mb-2">{product.description}</p>
            <p className="font-bold mb-4">${product.price}</p>
            <Link
              to={`/products/${product.id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
      <VoiceAssistant />
    </div>
  );
}

export default Products;