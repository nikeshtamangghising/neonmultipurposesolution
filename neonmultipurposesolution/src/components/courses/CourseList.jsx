import React from 'react';
import CourseCard from './CourseCard';
import { courses } from '../../data/courses';

const CourseList = () => {
  return (
    <section className="courses">
      <div className="container">
        <h2>Our Courses</h2>
        <p className="section-description">
          Explore our comprehensive range of IT and programming courses
        </p>
        <div className="courses-grid">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseList; 