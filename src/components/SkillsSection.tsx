import React from 'react';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-3">
          <div className="card">Python</div>
          <div className="card">React</div>
          <div className="card">AI/ML</div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
