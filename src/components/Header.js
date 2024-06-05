import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Caty Yount</h1>
      <p>Web Developer | Programmer | Tech Enthusiast</p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/landing">Landing Page</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
