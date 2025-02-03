import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Ram Kumar Shrestha",
      position: "Director",
      image: "/assets/images/team/director.jpg"
    },
    {
      name: "Sita Sharma",
      position: "Lead Instructor",
      image: "/assets/images/team/instructor1.jpg"
    },
    {
      name: "Hari Thapa",
      position: "Technical Trainer",
      image: "/assets/images/team/instructor2.jpg"
    },
    {
      name: "Gita Poudel",
      position: "Student Coordinator",
      image: "/assets/images/team/coordinator.jpg"
    }
  ];

  return (
    <section className="team-section">
      <div className="container">
        <h2>Our Team</h2>
        <p className="section-description">
          Meet our dedicated team of professionals
        </p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img 
                src={member.image} 
                alt={member.name} 
                className="team-member-image"
                onError={(e) => {
                  e.target.src = '/assets/images/default-avatar.png';
                }}
              />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 