import React from 'react';
import './Pages.css';

function Home() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="intro-text">
          <span className="intro-tag">It's me</span>
          <h1>Noel Ivan Sarino</h1>
          <h2>
            BSIT Student and Aspiring <span className="highlight-role">Developer</span>
          </h2>
          <p>This is my personal profile website—explore my background, education, projects, and contact info.</p>
          <a href="#contact" className="hero-button">Hire Me</a>
        </div>
        <div className="intro-image">
          <img 
            src="/images/SARINO.jpg" 
            alt="Noel Ivan Sarino" 
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
