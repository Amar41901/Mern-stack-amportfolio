import React from 'react';
import '../styles/Education.css';

const Education = () => (
  <div className="education-container">
    <h1 className="title">Education</h1>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-icon"></div>
        <div className="timeline-content">
          <h2>Bachelor of Engineering in Computer Science</h2>
          <p><strong>University:</strong> Savitribai Phule Pune University</p>
          <p><strong>Passout Year:</strong> 2022</p>
          <p><strong>CGPA:</strong> 8.44</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-icon"></div>
        <div className="timeline-content">
          <h2>12th in General Science</h2>
          <p><strong>School:</strong> Sant Tukaram Education Society, Parbhani</p>
          <p><strong>Passout Year:</strong> 2018</p>
          <p><strong>Percentage:</strong> 68.15%</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-icon"></div>
        <div className="timeline-content">
          <h2>SSC</h2>
          <p><strong>School:</strong> Vivekananda English School, Parbhani</p>
          <p><strong>Passout Year:</strong> 2016</p>
          <p><strong>Percentage:</strong> 86.80%</p>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
