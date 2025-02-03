import React from 'react';

const ContactInfo = () => {
  return (
    <div className="contact-info-section">
      <div className="info-item">
        <h3>📍 Location</h3>
        <p>Srijananagar, Bhaktapur</p>
        <p>Nepal</p>
      </div>

      <div className="info-item">
        <h3>📞 Phone</h3>
        <p>+977 9808811777</p>
        <p>+977 015924949</p>
      </div>

      <div className="info-item">
        <h3>📧 Email</h3>
        <p>nmsmultipurpose@gmail.com</p>
      </div>

      <div className="info-item">
        <h3>⏰ Business Hours</h3>
        <p>Sunday - Friday: 7:00 AM - 5:00 PM</p>
        <p>Saturday: Closed</p>
      </div>
    </div>
  );
};

export default ContactInfo; 