import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">
          <img src="/assets/images/logo.png" alt="Neon Multipurpose Solution" className="nav-logo" />
        </Link>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        <span className="sr-only">Menu</span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/courses" className="nav-link">Courses</Link>
        <Link to="/download" className="nav-link">Download Form</Link>
        <Link to="/reviews" className="nav-link">Reviews</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/about" className="nav-link">About Us</Link>
      </div>
    </nav>
  );
};

export default Navbar; 