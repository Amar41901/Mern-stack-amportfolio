import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container mx-auto flex justify-between items-center">
        <div className="navbar-brand">
          My Portfolio
        </div>
        <ol className="navbar-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li>
            <Link to="/education" className="nav-link">Education</Link>
          </li>
          <li>
            <Link to="/skills" className="nav-link">Skills</Link>
          </li>
          <li>
            <Link to="/experience" className="nav-link">Experience</Link>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;
