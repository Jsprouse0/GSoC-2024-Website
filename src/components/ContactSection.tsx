import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="card">
          <p>Email: Jms0338@auburn.edu</p>
          <p>LinkedIn: Jacob Sprouse</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
