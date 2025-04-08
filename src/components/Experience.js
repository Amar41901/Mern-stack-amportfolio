import React from 'react';
import '../styles/Experience.css';

const Experience = () => (
  <div className="experience-container">
    <h1 className="title">Experience</h1>
    <div className="experience-timeline">
      <div className="experience-item">
        <div className="experience-icon"></div>
        <div className="experience-content">
          <h2>Full Stack Developer</h2>
          <p><strong>Company:</strong> 3RI Technologies Pvt Ltd, Pune</p>
          <p><strong>Duration:</strong> 27 May 2024 - Present</p>
          <p><strong>Description:</strong> Worked on multiple real-time applications such as Leave Application, Learning Management System, Hospital Management System, and many more. Helped numerous students complete their learning projects and secure placements in IT firms.</p>
        </div>
      </div>
      <div className="experience-item">
        <div className="experience-icon"></div>
        <div className="experience-content">
          <h2>Mobile Application Developer</h2>
          <p><strong>Company:</strong> Bugendaitech Pvt Ltd, Pune</p>
          <p><strong>Duration:</strong> July 2023 - December 2023</p>
          <p><strong>Description:</strong> Worked on live projects such as Event Management Application, MCQ Test Application, Education Portal Apps, and many more. Implemented frontend technologies such as HTML, CSS, JavaScript, React JS, and backend technologies like Node JS, Express, MySQL. Improved verbal communication skills.</p>
        </div>
      </div>
      <div className="experience-item">
        <div className="experience-icon"></div>
        <div className="experience-content">
          <h2>Software Developer Intern</h2>
          <p><strong>Company:</strong> Bitmap Technology, Pune</p>
          <p><strong>Duration:</strong> September 2021 - February 2022</p>
          <p><strong>Description:</strong> Learned web development technologies such as HTML, CSS, JavaScript, Java, Advanced Java, MySQL, Springboot, Hibernate and worked on client-side projects. Enhanced verbal and communication skills. Explored and expanded technical skill-set.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
