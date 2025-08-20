import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero section">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-icon">🏆</span>
              <span>GSoC 2024 Contributor</span>
            </div>
            
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">Jacob Sprouse</span>
            </h1>
            
            <h2 className="hero-subtitle">
              Computer Science & Neuroscience Student
            </h2>
            
            <p className="hero-description">
              Passionate about AI engineering and computational neuroscience. 
              Currently enhancing NetPyNE's optimization algorithms as part of 
              Google Summer of Code 2024 with INCF.
            </p>
            
            <div className="hero-actions">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('#gsoc')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
                View GSoC Project
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('#contact')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                Get in Touch
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-container">
              <div className="image-backdrop"></div>
              <img 
                src="/images/Me.jfif" 
                alt="Jacob Sprouse" 
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
