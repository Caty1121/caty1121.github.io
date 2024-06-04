import React from 'react';
import './Header.css';
import portfolioPhotoImage from '../images/portfolioPhoto.png';

const Header = () => {
  return (
    <header>
      <h1>Caty Yount</h1>
      <p>Web Developer | Programmer | Tech Enthusiast</p>
      <img src={portfolioPhotoImage} alt="" className="portfolioImg"></img>    

      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
