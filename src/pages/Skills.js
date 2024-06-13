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
                Caty Mae is a skilled programmer and web developer with a diverse background in both technology and athletics. With an Associate of Arts (AA) degree in computer programming and currently pursuing a Bachelor of Science (BS) degree in web development, Caty has a strong foundation in computer science and programming principles.
            </p>  
            <p>
              Caty's professional journey includes significant experience as a programmer, specializing in SAP CPQ products. Holding an SAP certification, Caty has demonstrated expertise in developing and managing complex software solutions. Her role at Aspire Digital involves coordinating production support ticketing triage efforts, enhancing security within the codebase by identifying and replacing vulnerable queries, and creating efficient processes for managing changes.
            </p>
            <p>
              In addition to her technical skills, Caty has a passion for helping others. This is reflected in her transition from being a coach to becoming a programmer who actively assists colleagues in the workplace. She is committed to continuous learning and improvement, tackling Python practice problems one step at a time to build her expertise.
            </p>
        </section>
        <section class="tech-stack">
          <ul>
            <h3>Tech Stack</h3>
              <li>
                <h4 class="language">HTML</h4>
                <div className="progress-container">
                  <ProgressBar now={100} striped label="" variant="info"/>
                </div>
              </li>
              <li>
                <h4 class="language">CSS</h4>
                <div className="progress-container">
                  <ProgressBar now={90} striped label="" variant="info"/>
                </div>
              </li>
              <li>
                <h4 class="language">JavaScript</h4>
                <div className="progress-container">
                  <ProgressBar now={75} striped label="" variant="danger"/>
                </div>
              </li>
              <li>
                <h4 class="language">Python</h4>
                <div className="progress-container">
                  <ProgressBar now={80} striped label="" variant="warning"/>
                </div>
              </li>
              <li>
                <h4 class="language">SQL</h4>
                <div className="progress-container">
                  <ProgressBar now={70} striped label="" variant="dark"/>
                </div>
              </li>
              <li>
                <h4 class="language">React</h4>
                <div className="progress-container">
                  <ProgressBar now={70} striped label="" variant="primary"/>
                </div>
              </li>
              <li>
                <h4 class="language">Django</h4>
                <div className="progress-container">
                  <ProgressBar now={60} striped label="" variant="success"/>
                </div>
              </li>
          </ul>
        </section>
        <section class="tool-box">
          <ul>
            <h3>
              Tool Box
            </h3>
              <li>
                <h4>Bootstrap</h4>
              </li>
              <li>
                <h4>VS Code</h4>
              </li>
              <li>
                <h4>Postman</h4>
              </li>
              <li>
                <h4>Figma | Penpot</h4>
              </li>
              <li>
                <h4>Git | Github</h4>
              </li>
              <li>
                <h4>Bitbucket | Jenkins</h4>
              </li>
              <li>
                <h4>Jira | ServiceNow</h4>
              </li>
          </ul>
        </section>  
      </section>
    </section>
  );
};

export default Skills;
