import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="course-icon">{course.icon}</div>
      <h3>{course.title}</h3>
      <p className="course-description">{course.description}</p>
      <div className="course-details">
        <span className="course-duration">⏱️ {course.duration}</span>
        <span className="course-level">📊 {course.level}</span>
      </div>
      <button className="course-button">Learn More</button>
    </div>
  );
};

export default CourseCard; 