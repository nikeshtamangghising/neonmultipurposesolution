import React from 'react';

const DownloadForm = () => {
  const handleDownload = () => {
    // Replace with actual form PDF URL
    const formUrl = '/assets/documents/application-form.pdf';
    window.open(formUrl, '_blank');
  };

  return (
    <div className="download-form">
      <div className="form-content">
        <h2>Application Form</h2>
        <p className="form-description">
          Download our application form to begin your journey with Neon Multipurpose Solution.
        </p>
        
        <div className="instructions">
          <h3>Instructions</h3>
          <ul>
            <li>Download and fill out the application form completely</li>
            <li>Attach required documents (certificates, ID proof)</li>
            <li>Submit the form in person at our office</li>
            <li>Or email the scanned copy to: nmsmultipurpose@gmail.com</li>
          </ul>
        </div>

        <div className="requirements">
          <h3>Required Documents</h3>
          <ul>
            <li>Passport-size photographs (2 copies)</li>
            <li>Citizenship or valid ID proof</li>
            <li>Previous academic certificates</li>
            <li>Experience letters (if any)</li>
          </ul>
        </div>

        <button onClick={handleDownload} className="download-button">
          Download Application Form
        </button>

        <div className="contact-info">
          <p>For any queries regarding the application process, contact us:</p>
          <p>📞 +977 9808811777</p>
          <p>📧 nmsmultipurpose@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default DownloadForm; 