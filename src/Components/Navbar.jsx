import React from 'react';
const Navbar = () => {
    return (
      <nav className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-pink-500">Vanshu❤️</a>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-pink-400">Home</a></li>
            <li><a href="#gallery" className="hover:text-pink-400">Gallery</a></li>
            <li><a href="#about" className="hover:text-pink-400">About</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  

export default Navbar;
