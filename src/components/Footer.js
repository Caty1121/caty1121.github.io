import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioImage from '../images/portfolioPhoto.png'
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="logo">
            <img src={PortfolioImage} alt="Logo" />
          </div>
        <div className="social-media">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <p>© 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
