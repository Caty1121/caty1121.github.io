import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        <li>
          <h3>HTML</h3>
          <div className="progress-container">
            <ProgressBar now={100} striped label="" variant="info"/>
          </div>
        </li>
        <li>
          <h3>CSS</h3>
          <div className="progress-container">
            <ProgressBar now={85} striped label="" variant="primary"/>
          </div>
        </li>
        <li>
          <h3>JavaScript</h3>
          <div className="progress-container">
            <ProgressBar now={75} striped label="" variant="danger"/>
          </div>
        </li>
        <li>
          <h3>Python</h3>
          <div className="progress-container">
            <ProgressBar now={80} striped label="" variant="warning"/>
          </div>
        </li>
        <li>
          <h3>SQL</h3>
          <div className="progress-container">
            <ProgressBar now={70} striped label="" variant="dark"/>
          </div>
        </li>
        <li>
          <h3>React</h3>
          <div className="progress-container">
            <ProgressBar now={70} striped label="" variant="info"/>
          </div>
        </li>
        <li>
          <h3>Django</h3>
          <div className="progress-container">
            <ProgressBar now={60} striped label="" variant="success"/>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
