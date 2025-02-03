import React from 'react';
import AboutHero from '../components/about/AboutHero';
import Mission from '../components/about/Mission';
import Team from '../components/about/Team';

const About = () => {
  return (
    <div className="about-page">
      <AboutHero />
      <Mission />
      <Team />
    </div>
  );
};

export default About; 