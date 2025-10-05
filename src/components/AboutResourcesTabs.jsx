import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Import hamburger and close icons
import './AboutResourcesTabs.css';

export default function AboutResourcesTabs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="ar-navbar">
      <button className="hamburger-icon" onClick={toggleMenu} aria-label="Open menu">
        <FiMenu />
      </button>

      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <button className="close-icon" onClick={closeMenu} aria-label="Close menu">
            <FiX />
          </button>
          <div className="mobile-menu-nav">
            <Link to="/" className="mobile-nav-link" onClick={closeMenu}>
              Waitlist
            </Link>
            <Link to="/about" className="mobile-nav-link" onClick={closeMenu}>
              About
            </Link>
            <Link to="/resources" className="mobile-nav-link" onClick={closeMenu}>
              Resources
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
