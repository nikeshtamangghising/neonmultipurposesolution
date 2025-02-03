import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

// Temporary components for other routes
const Courses = () => <div>Courses Page</div>;
const Download = () => <div>Download Form Page</div>;
const Reviews = () => <div>Reviews Page</div>;
const Contact = () => <div>Contact Page</div>;
const About = () => <div>About Page</div>;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/download" element={<Download />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
