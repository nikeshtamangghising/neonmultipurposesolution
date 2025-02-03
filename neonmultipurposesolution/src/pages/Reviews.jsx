import React from 'react';
import TestimonialList from '../components/reviews/TestimonialList';

const Reviews = () => {
  return (
    <div className="reviews-page">
      <div className="reviews-header">
        <h1>Student Testimonials</h1>
        <p>Hear from our successful students</p>
      </div>
      <TestimonialList />
    </div>
  );
};

export default Reviews; 