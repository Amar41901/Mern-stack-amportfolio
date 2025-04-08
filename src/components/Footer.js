import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faHackerrank, faGithub, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-icons">
      <a href="https://www.linkedin.com/in/amar-mapare-6a93771a4/" target="_blank" rel="noopener noreferrer" className="footer-icon">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://www.hackerrank.com/profile/mapareamar" target="_blank" rel="noopener noreferrer" className="footer-icon">
        <FontAwesomeIcon icon={faHackerrank} />
      </a>
      <a href="https://leetcode.com/u/Amar41901/" target="_blank" rel="noopener noreferrer" className="footer-icon">
        <FontAwesomeIcon icon={faJsSquare} />
      </a>
      <a href="https://github.com/Amar41901" target="_blank" rel="noopener noreferrer" className="footer-icon">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
    <p className="footer-copyright">&copy; 2025 Amar Portfolio. All rights reserved.</p>
  </footer>
);

export default Footer;
