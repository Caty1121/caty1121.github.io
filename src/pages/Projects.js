import React from 'react';
import './Projects.css';
import IWRhomepageImage from '../images/IWRhomepage.png'; 
import StayConnecthomepageImage from '../images/StayConnecthomepage.png'
import ComingSoonImage from '../images/coming-soon-image.png'

const Projects = () => {
  return (
    <section id="projects-box">
      <h2>Projects</h2>
        <div class="projects">
          <div className="project-box">
            <div className="project" id="stayConnect">
              <img src={StayConnecthomepageImage} alt="StayConnect Homepage" class="project-image"/>
                <h3>StayConnect</h3>
                  <p>A site to empower and educate our aging population to confidently navigate and embrace modern technology.</p>
                  <a href="https://github.com/username/stayconnect">GitHub Repo</a>
            </div>
            <div className="project" id="IWR">
              <img src={IWRhomepageImage} alt="IWR Homepage" class="project-image"/>
                <h3>Interstellar Wellness Retreats</h3>
                  <p>A luxury, wellness-based Destination Management Company (DMC) based in outerspace.</p>
                  <a href="https://github.com/Caty1121/my-portfolio.git">GitHub Repo</a>
            </div>
            <div className="project" id="ActivityNest">
              <img src={ComingSoonImage} alt="ActivityNest" class="project-image"/>
                <h3>ActivityNest</h3>
                  <p>TODO: A suscription based service getting families together & outdoors.</p>
                  <a href="https://github.com/Caty1121/my-portfolio.git">GitHub Repo</a>
            </div>      
          </div>
        </div>  
    </section>
  );
};

export default Projects;
