import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Home.css';
import devImage from '../assets/3411109.jpg';


const Home = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="home-container">
      <div className="text-section" data-aos="fade-right">
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
        <p data-aos="fade-up" data-aos-delay="200">
          I'm a passionate developer who loves building responsive web applications and exploring new technologies.
          From crafting full-stack MERN projects to solving real-world problems with code, I strive to create impactful digital experiences.
          Let's connect and build something amazing together!
        </p>
        <div className="button-group" data-aos="fade-up" data-aos-delay="400">
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
      <div className="image-section" data-aos="fade-left">
        <img src={devImage} alt="Developer working" />
      </div>
    </div>
  );
};

export default Home;
