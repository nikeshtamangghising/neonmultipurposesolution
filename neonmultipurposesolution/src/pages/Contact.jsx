import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with us for any inquiries</p>
      </div>

      <div className="contact-content">
        <div className="contact-grid">
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <ContactForm />
          </div>
          
          <div className="contact-info-container">
            <h2>Contact Information</h2>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 