import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Connect() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Connect with Us</h2>
        <p className="text-gray-600 mb-8">Follow us on social media and stay updated with our latest products and offers.</p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800 text-2xl" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600 text-2xl" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="text-pink-500 hover:text-pink-700 text-2xl" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-900 text-2xl" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Newsletter Subscription */}
        <div className="max-w-md mx-auto">
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Connect;
