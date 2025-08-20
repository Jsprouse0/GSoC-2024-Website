import React from 'react';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3>NetPyNE</h3>
            <p>Neural network simulation platform</p>
          </div>
          <div className="card">
            <h3>Wscale</h3>
            <p>Weight optimization tool</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
