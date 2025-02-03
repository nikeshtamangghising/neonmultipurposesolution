import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Neon Multipurpose Solution</h1>
        <p>Your Gateway to Professional IT Education in Bhaktapur</p>
        <Link to="/courses" className="cta-button">
          Apply Now
        </Link>
      </div>
    </section>
  );
};

export default Hero; 