import React from 'react';
import "../styles/About.css";
import ProfileImage from '../assets/Hemil.jpg';

const About = () => {
  return (
    <div className="about-container section" data-aos="fade-up">
      {/* Main About Section */}
      <div className="about-section" data-aos="fade-right">
        <div className="about-text">
          <div className="name-header">
            <span className="hello-text">Hello, I'm</span>
            <h2 className="name-text">Hemil Patel</h2>
            <span className="title-text">Full Stack Developer</span>
          </div>
          <p>
            Hi! I'm Hemil, a passionate Computer Science Engineering student who loves building web applications and continuously learning new technologies.
            I enjoy turning ideas into user-friendly and efficient digital solutions.
            Whether coding, designing, or problem-solving, I always strive to deliver my best and grow my skills.
          </p>
        </div>
        <div className="about-image">
          <img src={ProfileImage} alt="Hemil Patel" />
        </div>
      </div>

      {/* Education and Journey Sections - Side by Side */}
      <div className="details-section" data-aos="fade-left">
        <div className="education-section">
          <h3>Education</h3>
          
          <div className="education-item">
              <h4>Bachelor of Technology</h4>
              <p className="education-detail">Computer Science and Engineering</p>
              <p className="education-detail">Charusat University, Anand, Gujarat</p>
              <p className="education-detail">07/2023 - 06/2027</p>
              <p className="education-score">CGPA: 9.84/10</p>
            </div>
            
            <div className="education-item">
              <h4>Higher Secondary Certificate (HSC)</h4>
              <p className="education-detail">Science Stream</p>
              <p className="education-detail">Lokmanya Vidhyalaya, Rander, Surat</p>
              <p className="education-detail">2021 - 2023</p>
              <p className="education-score">Percentage: 78%</p>
            </div>
            
            <div className="education-item">
              <h4>Secondary School Certificate (SSC)</h4>
              <p className="education-detail">Smt. I. N. Tekrawala High School, Surat</p>
              <p className="education-detail">2020 - 2021</p>
              <p className="education-score">Percentage: 81%</p>
            </div>
          </div>

          <div className="journey-section">
            <h3>My Journey</h3>
            <p>
              I'm a Computer Science Engineering student passionate about building innovative applications and solving complex problems.
            </p>
            <p>
              Currently pursuing my B.Tech at Charusat University, I've worked with technologies including Java, JavaScript, Python, React.js, Node.js, MongoDB, and MySQL.
            </p>
            <p>
              I've developed projects like a Clubs Management System (PHP/MySQL), an Event Management System (Python), and a Food Loss Reduction app (MERN stack).
            </p>
            <p>
              I've earned 5-star badges in C++ on HackerRank and solved over 150 problems on LeetCode, demonstrating strong coding and problem-solving skills.
            </p>
            <p className="current-status">
              <strong>Open to internship opportunities in software development</strong>
            </p>
          </div>
      </div>
    </div>
  );
};

export default About;