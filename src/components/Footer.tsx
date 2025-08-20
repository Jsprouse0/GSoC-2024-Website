import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="section" style={{ background: 'var(--bg-tertiary)', textAlign: 'center', padding: '2rem 0' }}>
      <div className="container">
        <p>&copy; 2024 Jacob Sprouse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
