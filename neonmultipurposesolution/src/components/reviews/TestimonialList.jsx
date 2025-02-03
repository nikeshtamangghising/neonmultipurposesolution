import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../../data/testimonials';

const TestimonialList = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>Student Reviews</h2>
        <p className="section-description">
          See what our students say about their learning experience
        </p>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialList; 