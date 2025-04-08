import React from 'react';
import '../styles/Projects.css';

const Projects = () => (
  <div className="projects-container">
    <h1 className="projects-title">Projects</h1>
    <p className="projects-intro">Here are some of the projects I've worked on:</p>
    <div className="project-list">
      <div className="project-item">
        <h2 className="project-name">Ongoing Project: Leave Management System for HRMS Portals</h2>
        <p>This application serves as a comprehensive platform for organizations to efficiently manage employee data, including leaves, attendance, and salary records. The system employs a role-based approach, ensuring tailored access for HR personnel and employees. Built with React.js front-end and Node.js, Express.js, and MongoDB back-end, it guarantees seamless data management and security. Styled with Material-UI, SCSS, TCSS, HTML, and CSS, the interface is modern, responsive, and user-friendly. This project streamlines HR workflows efficiently.</p>
      </div>
      <div className="project-item">
        <h2 className="project-name">Project 1: Hospital Management System</h2>
        <p>This comprehensive system streamlines hospital operations by efficiently managing staff data and credentials. It features a role-based UI, delivering a dynamic and responsive interface with HTML, CSS, JavaScript, SCSS, Bootstrap, and React.js. The back-end uses Node.js, Express.js, and MongoDB for secure data handling, while JWT, Passport, and Google Auth ensure advanced authentication mechanisms.</p>
      </div>
      <div className="project-item">
        <h2 className="project-name">Project 2: MCQ Test Application</h2>
        <p>An innovative examination platform that automatically converts data from Excel sheets into structured test interfaces. Built with React.js for the front-end and Node.js, Express.js, and MySQL for the back-end, it focuses on automation and efficient result evaluation with robust authorization and authentication.</p>
      </div>
      <div className="project-item">
        <h2 className="project-name">Project 3: Event Management Application (BookMyShow Clone)</h2>
        <p>A feature-rich platform for discovering, booking, and managing event tickets online. The front-end uses HTML, CSS, JavaScript, and React.js, while the back-end is powered by Node.js, Express.js, and MySQL for efficient data handling and event management.</p>
      </div>
      <div className="project-item">
        <h2 className="project-name">Project 4: E-commerce Website (Amazon Clone)</h2>
        <p>A dynamic e-commerce platform built with React.js, Node.js, Express.js, and MongoDB. Styled with Bootstrap, Material-UI, SCSS, and CSS, the platform offers a seamless shopping experience with user registration, login, product search, and purchase functionalities.</p>
      </div>
      <div className="project-item">
        <h2 className="project-name">Project 5: Chat Application</h2>
        <p>A real-time chat platform using React.js, Socket.io, and WebSocket for interactive communication. The back-end, powered by Node.js, Express.js, and MySQL, ensures efficient user data and message management.</p>
      </div>
      <div className="project-item">
        <h2 className="project-name">Academic Project: Secure Deduplication in Cloud</h2>
        <p>An efficient system to eliminate duplicate data in cloud storage using AES encryption and MD5 algorithms. Built with Java, MySQL, Apache Tomcat, and XAMPP, it optimizes secure storage for cloud platforms.</p>
      </div>
    </div>
    <p className="projects-outro">Each project highlights my skills in creating user-friendly, secure, and efficient applications. Click on each project name to learn more!</p>
  </div>
);

export default Projects;
