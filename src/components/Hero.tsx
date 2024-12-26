import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-[--primary] to-[--accent] text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
          ಕರ್ನಾಟಕ ಮೀಡಿಯಾ ಜರ್ನಲಿಸ್ಟ್ ಯೂನಿಯನ್
          </h1>
          <p className="text-xl mb-8 text-[--secondary]">
          Karnataka Media Journalists Union
          </p>
          <div className="flex justify-center gap-4">
          <Link 
            to="/about" 
            className="bg-[--secondary] text-[--primary] hover:bg-opacity-90 hover:shadow-md px-6 py-2 rounded-lg transition-transform duration-300 font-semibold transform hover:scale-105"
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className="border border-[--secondary] text-[--secondary] hover:bg-[--secondary-light] hover:text-[--primary] px-6 py-2 rounded-lg transition-transform duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>

        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[--background]"></div>
    </div>
  );
}