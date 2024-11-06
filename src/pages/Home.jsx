import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Welcome to Voice Shop</h1>
      <p className="text-xl mb-8">Shop hands-free with voice commands!</p>
      <Link
        to="/products"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600"
      >
        Start Shopping
      </Link>
    </div>
  );
}

export default Home;