// src/components/Header.js
import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/95 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Current Company Badge - No Logo */}
            <button 
              className="flex items-center gap-2 group" 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-sm sm:text-base text-gray-300 font-medium tracking-wide group-hover:text-[#E96600] transition-colors duration-300">
                Currently at <span className="text-[#E96600] font-semibold">XY Tech</span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
              <a href="#home" className="relative text-white font-medium text-base lg:text-lg transition-all duration-300 hover:text-[#E96600] group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E96600] to-[#ff8c3a] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#services" className="relative text-white font-medium text-base lg:text-lg transition-all duration-300 hover:text-[#E96600] group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E96600] to-[#ff8c3a] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="relative text-white font-medium text-base lg:text-lg transition-all duration-300 hover:text-[#E96600] group">
                About Me
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E96600] to-[#ff8c3a] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#portfolio" className="relative text-white font-medium text-base lg:text-lg transition-all duration-300 hover:text-[#E96600] group">
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E96600] to-[#ff8c3a] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="relative text-white font-medium text-base lg:text-lg transition-all duration-300 hover:text-[#E96600] group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E96600] to-[#ff8c3a] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Let's Connect Button - Desktop */}
            <a
              href="#contact"
              className="hidden md:inline-flex px-7 py-3 bg-gradient-to-r from-[#E96600] to-[#ff8c3a] text-black font-semibold rounded-lg hover:from-[#d55c00] hover:to-[#ff8c3a] transition-all duration-300 shadow-lg shadow-[#E96600]/30 hover:shadow-xl hover:shadow-[#E96600]/40 hover:scale-105"
            >
              Let's Connect
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-20 md:top-24 left-0 right-0 bg-[#121212] border-b border-gray-800/50 z-40">
          <div className="px-5 py-8 space-y-6">
            <a
              href="#home"
              className="block text-white font-medium text-lg transition-all duration-300 hover:text-[#E96600] hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="block text-white font-medium text-lg transition-all duration-300 hover:text-[#E96600] hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block text-white font-medium text-lg transition-all duration-300 hover:text-[#E96600] hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </a>
            <a
              href="#portfolio"
              className="block text-white font-medium text-lg transition-all duration-300 hover:text-[#E96600] hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="block text-white font-medium text-lg transition-all duration-300 hover:text-[#E96600] hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>

            {/* Let's Connect in mobile menu */}
            <a
              href="#contact"
              className="block mt-6 px-6 py-4 bg-gradient-to-r from-[#E96600] to-[#ff8c3a] text-black font-semibold rounded-lg text-center hover:from-[#d55c00] hover:to-[#ff8c3a] transition"
              onClick={() => setIsOpen(false)}
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-20 md:h-24"></div>
    </>
  );
}

export default Header;