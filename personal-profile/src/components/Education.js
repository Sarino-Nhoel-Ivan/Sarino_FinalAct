import React from 'react';
import './Pages.css';

function Education() {
  return (
    <div className="page education-page">
      <div className="container">
        <div className="page-content">
          <h2>Education</h2>
          
          <div className="education-list">
            <div className="education-item">
              <h3>Bachelor of Science in Information Technology</h3>
              <p className="institution">Pamantasan ng Cabuyao (PNC)</p>
              <p className="years">2022 - Present</p>
            </div>

            <div className="education-item">
              <h3>Senior High School - TVL (ict track) Strand</h3>
              <p className="institution">Cabuyao Institute of Technology (CiTECH)</p>
              <p className="years">2020 - 2022</p>
            </div>

            <div className="education-item">
              <h3>High School</h3>
              <p className="institution">Infant Jesus Montessori Center Inc. (IJMC)</p>
              <p className="years">2016 - 2020</p>
            </div>

            <div className="education-item">
              <h3>Elementary</h3>
              <p className="institution">San Isidro Elementary School</p>
              <p className="years">2010 - 2016</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
