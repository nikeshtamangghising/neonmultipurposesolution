import React from 'react';

const Mission = () => {
  return (
    <section className="mission-section">
      <div className="container">
        <div className="mission-grid">
          <div className="mission-item">
            <h2>Our Mission</h2>
            <p>
              To provide high-quality IT education and training that empowers students 
              to excel in their careers and contribute to the digital transformation 
              of Nepal.
            </p>
          </div>

          <div className="mission-item">
            <h2>Our Vision</h2>
            <p>
              To become the leading IT training institute in Nepal, recognized for 
              excellence in education and innovation in technology training.
            </p>
          </div>

          <div className="mission-item">
            <h2>Our Values</h2>
            <ul>
              <li>Excellence in Education</li>
              <li>Practical Learning</li>
              <li>Innovation</li>
              <li>Student Success</li>
              <li>Professional Ethics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission; 