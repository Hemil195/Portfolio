import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: faInstagram, url: "https://www.instagram.com/hemil_195/", label: "Instagram" },
    { icon: faLinkedin, url: "https://www.linkedin.com/in/hemil-patel-298a83288/", label: "LinkedIn" },
    {icon: faGithub, url: "https://github.com/Hemil195", label: "GitHub"}
  ];

  const contactInfo = [
    { icon: faEnvelope, text: "hemilpatel1905@gmail.com" },
    { icon: faPhone, text: "+91 9712255549" }
  ];

  const aboutLinks = [
    { text: "Download Resume", url: "/resume.pdf", download: true },
    { text: "Projects", url: "/projects" },
    { text: "Contact Me", url: "/contact" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="brand-name">Hemil</h4>
          <p>© {currentYear} Hemil. All rights reserved.</p>
          <div className="social-icons">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                <FontAwesomeIcon icon={link.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          {contactInfo.map((info, index) => (
            <p key={index}>
              <FontAwesomeIcon icon={info.icon} /> {info.text}
            </p>
          ))}
        </div>

        <div className="footer-section">
          <h4>About</h4>
          {aboutLinks.map((link, index) => (
            <p key={index}>
              {link.download ? (
                <a href={link.url} download>{link.text}</a>
              ) : (
                <Link to={link.url}>{link.text}</Link>
              )}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
