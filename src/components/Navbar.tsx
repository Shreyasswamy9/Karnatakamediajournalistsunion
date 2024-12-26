import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Newspaper from '/src/Assets/KMJU LOGO.svg'
import { Form, Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[--primary] to-[--accent] text-white fixed w-full z-50 top-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link to="/" className="flex-shrink-0 flex items-center space-x-4">
            <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center">
              <img src={Newspaper} alt="KMJU Logo" className="w-full h-full object-contain rounded-full" />
            </div>
            <div className="text-xl font-bold">KMJU</div>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/members" className="nav-link">Members</Link>
            <Link to="/events" className="nav-link">Events</Link>
            <Link to="/gallery" className="nav-link">Gallery</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[--secondary] p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="nav-link px-2 py-1" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" className="nav-link px-2 py-1" onClick={() => setIsOpen(false)}>About Us</Link>
              <Link to="/members" className="nav-link px-2 py-1" onClick={() => setIsOpen(false)}>Members</Link>
              <Link to="/events" className="nav-link px-2 py-1" onClick={() => setIsOpen(false)}>News</Link>
              <Link to="/gallery" className="nav-link px-2 py-1" onClick={() => setIsOpen(false)}>Gallery</Link>
              <Link to="/contact" className="nav-link px-2 py-1" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}