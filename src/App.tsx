import './App.css';

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="shooting-stars">
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
          </div>
          <div className="stars">
            <div className="star star-1">✦</div>
            <div className="star star-2">✧</div>
            <div className="star star-3">✦</div>
            <div className="star star-4">✧</div>
            <div className="star star-5">✦</div>
            <div className="star star-6">✧</div>
            <div className="star star-7">✦</div>
            <div className="star star-8">✧</div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Jacob Sprouse
            </h1>
            <h2 className="hero-subtitle">
              Google Summer of Code 2024 Contributor
            </h2>
            <p className="hero-description">
              Computer Science & Neuroscience Student | AI Engineering Focus
            </p>
            <div className="hero-badges">
              <span className="badge">Auburn University</span>
              <span className="badge">INCF Intern</span>
              <span className="badge">NetPyNE Developer</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm an undergraduate at Auburn University, pursuing a dual bachelor's degree in 
                <strong> Neuroscience</strong> and <strong>Computer Science</strong> with a focus on AI engineering. 
                My academic journey bridges the complexities of the brain with cutting-edge computational techniques.
              </p>
              <p>
                As a <strong>Google Summer of Code 2024</strong> intern for the International Neuroinformatics 
                Coordinating Facility (INCF), I enhanced model development using NetPyNE's "batch" subpackage, 
                focusing on scalability and user-friendliness while exploring various search algorithms for 
                neural network optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag primary">Python</span>
                <span className="skill-tag primary">Java</span>
                <span className="skill-tag secondary">C++</span>
                <span className="skill-tag secondary">JavaScript</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Web Technologies</h3>
              <div className="skill-tags">
                <span className="skill-tag accent">React</span>
                <span className="skill-tag accent">HTML/CSS</span>
                <span className="skill-tag accent">TypeScript</span>
                <span className="skill-tag accent">Vite</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Neuroscience Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag special">NetPyNE</span>
                <span className="skill-tag special">NEURON</span>
                <span className="skill-tag special">Computational Modeling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card featured">
              <div className="project-header">
                <h3>NetPyNE Development</h3>
                <span className="project-type">GSoC 2024</span>
              </div>
              <p>Enhanced neural network simulation capabilities with improved batch processing and optimization algorithms.</p>
              <div className="project-tags">
                <span>Python</span>
                <span>NEURON</span>
                <span>Neural Networks</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-header">
                <h3>Wscale Grid Search</h3>
                <span className="project-type">Research Tool</span>
              </div>
              <p>Specialized framework for weight and EPSP parameter optimization in neural simulations.</p>
              <div className="project-tags">
                <span>Optimization</span>
                <span>Research</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-header">
                <h3>VBSA Analysis</h3>
                <span className="project-type">Analysis</span>
              </div>
              <p>Variance-Based Sensitivity Analysis implementation using Sobol's sensitivity indices.</p>
              <div className="project-tags">
                <span>Statistics</span>
                <span>Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <div className="contact-grid">
            <a href="mailto:Jms0338@auburn.edu" className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>Jms0338@auburn.edu</p>
            </a>
            <a href="https://github.com/Jsprouse0" className="contact-card">
              <div className="contact-icon">🐙</div>
              <h3>GitHub</h3>
              <p>@Jsprouse0</p>
            </a>
            <a href="https://www.linkedin.com/in/jacob-sprouse-590a71255/" className="contact-card">
              <div className="contact-icon">💼</div>
              <h3>LinkedIn</h3>
              <p>Jacob Sprouse</p>
            </a>
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Location</h3>
              <p>Auburn, AL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Jacob Sprouse. Built with React & TypeScript.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
