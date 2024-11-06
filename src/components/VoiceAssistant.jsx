import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function VoiceAssistant() {
  const [isListening, setIsListening] = useState(false);
  const [feedback, setFeedback] = useState('');
  const recognition = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      recognition.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.current.continuous = true;
      recognition.current.interimResults = false;
      recognition.current.lang = 'en-US';

      recognition.current.onresult = handleSpeechResult;
      recognition.current.onerror = (event) => console.error('Speech recognition error', event.error);
    } else {
      console.error('Speech recognition not supported');
    }

    return () => {
      if (recognition.current) {
        recognition.current.stop();
      }
    };
  }, []);

  const handleSpeechResult = (event) => {
    const last = event.results.length - 1;
    const command = event.results[last][0].transcript.toLowerCase();

    setFeedback(`Command recognized: ${command}`);

    if (command.includes('go to') || command.includes('show me')) {
      handleNavigationCommand(command);
    } else if (command.includes('select product')) {
      handleSelectProductCommand(command);
    } else if (command.includes('add to cart')) {
      handleAddToCartCommand(command);
    }
  };

  const handleNavigationCommand = (command) => {
    if (command.includes('home')) {
      navigate('/');
    } else if (command.includes('products')) {
      navigate('/products');
    } else if (command.includes('cart')) {
      navigate('/cart');
    }
  };

  const handleSelectProductCommand = (command) => {
    const productNumber = command.match(/\d+/);
    if (productNumber && location.pathname === '/products') {
      const productId = parseInt(productNumber[0]);
      navigate(`/products/${productId}`);
      setFeedback(`Selected product ${productId}`);
    } else {
      setFeedback('Please go to the products page to select a product');
    }
  };

  const handleAddToCartCommand = (command) => {
    // In a real app, this would add the product to the cart
    setFeedback('Product added to cart');
    navigate('/cart');
  };

  const toggleListening = () => {
    if (isListening) {
      recognition.current?.stop();
    } else {
      recognition.current?.start();
    }
    setIsListening(!isListening);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={toggleListening}
        className={`rounded-full w-12 h-12 flex items-center justify-center ${
          isListening ? 'bg-red-500' : 'bg-blue-500'
        } text-white`}
      >
        {isListening ? 'Stop' : 'Start'}
      </button>
      {feedback && (
        <div className="absolute bottom-16 right-0 bg-white p-2 rounded shadow">
          {feedback}
        </div>
      )}
    </div>
  );
}

export default VoiceAssistant;