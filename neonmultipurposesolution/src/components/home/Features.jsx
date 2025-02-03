import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "🎓",
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience"
    },
    {
      icon: "💻",
      title: "Hands-on Training",
      description: "Practical experience with real-world projects"
    },
    {
      icon: "📚",
      title: "Comprehensive Courses",
      description: "From basics to advanced topics in IT and programming"
    },
    {
      icon: "🌟",
      title: "Career Support",
      description: "Guidance for your professional development"
    }
  ];

  return (
    <section className="features">
      <h2>Why Choose Us</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features; 