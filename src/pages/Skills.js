import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills-box">
    <h2>Skills</h2>
      <section id="skills">
        <section class="intro">
          <h3>Introduction</h3>
            <p>
                Caty Mae is a skilled programmer and web developer with a diverse background in technology and mentorship. With a degree in computer programming and web development, Caty has a strong foundation in computer science and programming principles.
            </p>  
            <p>
              Caty's professional journey includes significant experience with e-commerce develoment and design and SAAS products. Holding an SAP CPQ certification, Caty has demonstrated expertise in developing and managing complex software solutions. Her current role at involves leading daily scrum calls, front and back end development, and process improvement.
            </p>
            <p>
              In addition to her technical skills, Caty has a passion for helping others. This is reflected in her transition from being a coach to becoming a programmer who actively assists colleagues in the workplace. She is committed to continuous learning and improvement, tackling one project at a time to continue to build her expertise.
            </p>
        </section>
        <section class="tech-stack">
          <ul>
            <h3>Tech Stack</h3>
              <li>
                <div className="progress-container">
                  <ProgressBar now={100} striped label="" variant="info"/>
                </div>
                <h4 class="language">HTML</h4>
              </li>
              <li>
                <div className="progress-container">
                  <ProgressBar now={90} striped label="" variant="info"/>
                </div>
                <h4 class="language">CSS</h4>
              </li>
              <li>
                <div className="progress-container">
                  <ProgressBar now={75} striped label="" variant="danger"/>
                </div>
                <h4 class="language">JavaScript</h4>
              </li>
              <li>
                <div className="progress-container">
                  <ProgressBar now={80} striped label="" variant="warning"/>
                </div>
                <h4 class="language">Python</h4>
              </li>
              <li>
                <div className="progress-container">
                  <ProgressBar now={70} striped label="" variant="dark"/>
                </div>
                <h4 class="language">SQL</h4>
              </li>
              <li>
                <div className="progress-container">
                  <ProgressBar now={70} striped label="" variant="primary"/>
                </div>
                <h4 class="language">React</h4>
              </li>
              <li>
                <div className="progress-container">
                  <ProgressBar now={60} striped label="" variant="success"/>
                </div>
                <h4 class="language">Django</h4>
              </li>
          </ul>
        </section>
        <section class="tool-box">
          <ul>
            <h3>
              Tool Box
            </h3>
              <li>
                <h4 class="tool-box-content">Bootstrap</h4>
              </li>
              <li>
                <h4 class="tool-box-content">VS Code</h4>
              </li>
              <li>
                <h4 class="tool-box-content">Postman</h4>
              </li>
              <li>
                <h4 class="tool-box-content">Figma | Penpot</h4>
              </li>
              <li>
                <h4 class="tool-box-content">Git | Github</h4>
              </li>
              <li>
                <h4 class="tool-box-content">Bitbucket | Jenkins</h4>
              </li>
              <li>
                <h4 class="tool-box-content">Jira | ServiceNow</h4>
              </li>
          </ul>
        </section>  
      </section>
    </section>
  );
};

export default Skills;
