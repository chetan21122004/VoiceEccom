import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p className="mb-2">{product.description}</p>
      <p className="font-bold mb-4">${product.price}</p>
      <Link
        to={`/products/${product.id}`}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;