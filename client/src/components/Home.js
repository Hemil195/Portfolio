import React from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import '../styles/Home.css';
import devImage from '../assets/3411109.jpg';

const Home = () => {
  return (
    <div className="home-container fade-slide-up">
      <div className="text-section">
        <h2>👋 Hi, I'm <span className="name-highlight">Hemil Patel</span></h2>
        <div className="typing-container">
          <ReactTyped
            strings={[
              'MERN Stack Developer',
              'Web App Designer',
              'Open Source Contributor',
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
            className="typed-text"
          />
        </div>
        <p>
          I'm a passionate developer who loves building responsive web applications and exploring new technologies.
          From crafting full-stack MERN projects to solving real-world problems with code, I strive to create impactful digital experiences.
          Let's connect and build something amazing together!
        </p>
        <div className="button-group stagger-children">
          <Link to="/about">
            <button className="button">About</button>
          </Link>
          <Link to="/projects">
            <button className="button">Projects</button>
          </Link>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noreferrer"
            className="resume-link"
          >
            <button className="button resume-button">
              Resume
            </button>
          </a>
        </div>
      </div>
      <div className="image-section">
        <img src={devImage} alt="Developer working" />
      </div>
    </div>
  );
};

export default Home;
