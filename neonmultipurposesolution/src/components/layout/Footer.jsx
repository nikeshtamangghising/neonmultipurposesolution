import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Details</h3>
          <p>📍 Srijananagar, Bhaktapur, Nepal</p>
          <p>📧 nmsmultipurpose@gmail.com</p>
          <p>📱 +977 9808811777</p>
          <p>📱 +977 015924949</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About Us</Link>
        </div>

        <div className="footer-section">
          <h3>Social Media</h3>
          {/* Add social media links here */}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Neon Multipurpose Solution. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 