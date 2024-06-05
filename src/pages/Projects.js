import React from 'react';
import './Projects.css';
import IWRhomepageImage from '../images/IWRhomepage.png'; 
import StayConnecthomepageImage from '../images/StayConnecthomepage.png'
const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
      <img src={StayConnecthomepageImage} alt="StayConnect Homepage" />
        <h3>StayConnect</h3>
        <p>A site to empower and educate our aging population to confidently navigate and embrace modern technology.</p>
        <a href="https://github.com/username/stayconnect">GitHub Repo</a>
        <a href="https://stayconnect.netlify.app">Live Site</a>
      </div>
      <div className="project" id="IWR">
        <img src={IWRhomepageImage} alt="IWR Homepage" />
        <h3>Interstellar Wellness Retreats</h3>
        <p>A luxury, wellness-based Destination Management Company (DMC) based in outerspace.</p>
        <a href="https://github.com/Caty1121/my-portfolio.git">GitHub Repo</a>
        <a href="https://project2.netlify.app">Live Site</a>
      </div>
    </section>
  );
};

export default Projects;
