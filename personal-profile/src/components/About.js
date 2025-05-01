import React from 'react';
import './Pages.css';

function About() {
  return (
    <div className="page about-page">
      <div className="container">
        <div className="page-content">
          <h2>About Me</h2>
          
          <section className="about-section">
            <h3>Personal Background</h3>
            <p>
              I am Nhoel Ivan Sarino, born on June 14, 2004. I am currently a 3rd year Information Technology student 
              with a strong passion for technology and continuous learning. I grew up in the Philippines, where I developed 
              a deep interest in how digital solutions can solve real-world problems. I aspire to contribute meaningfully 
              to the tech industry and be part of innovations that create positive change.
            </p>
          </section>
          
          <section className="about-section">
            <h3>Hobbies</h3>
            <ul>
              <li>Playing video games</li>
              <li>Basketball</li>
              <li>Biking</li>
              <li>Riding</li>
            </ul>
          </section>
          
          <section className="about-section">
            <h3>Interests</h3>
            <ul>
              <li>Web Development</li>
              <li>Artificial Intelligence</li>
              <li>Cybersecurity</li>
              <li>Mobile App Development</li>
              <li>Database Management</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
