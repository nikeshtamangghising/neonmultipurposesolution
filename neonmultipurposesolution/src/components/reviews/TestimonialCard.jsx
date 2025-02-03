import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        {index < rating ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="testimonial-image"
          onError={(e) => {
            e.target.src = '/assets/images/default-avatar.png';
          }}
        />
        <div className="testimonial-info">
          <h3>{testimonial.name}</h3>
          <p className="course-name">{testimonial.course}</p>
          <div className="rating">
            {renderStars(testimonial.rating)}
          </div>
        </div>
      </div>
      <p className="testimonial-text">"{testimonial.feedback}"</p>
    </div>
  );
};

export default TestimonialCard; 