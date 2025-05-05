import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div class="mt-5 font-m6x11">
    <nav className="bg-blue-500 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          My Portfolio
        </div>
      </div>
    

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-white hover:text-gray-300">About</a>
          <a href="#projects" className="text-white hover:text-gray-300">Projects</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-blue-500 space-y-4 px-6 py-4">
          <a href="#about" className="block text-white">About</a>
          <a href="#projects" className="block text-white">Projects</a>
          <a href="#contact" className="block text-white">Contact</a>
        </div>
      )}
      </nav>
    </div>
  );
};

export default Navbar;