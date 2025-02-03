import React from 'react';
import CourseList from '../components/courses/CourseList';

const Courses = () => {
  return (
    <div className="courses-page">
      <div className="courses-header">
        <h1>Our Courses</h1>
        <p>Take your career to the next level with our professional IT courses</p>
      </div>
      <CourseList />
    </div>
  );
};

export default Courses; 