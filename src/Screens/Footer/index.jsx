import React from 'react';
import './styles.scss'; // Custom CSS for modern look
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="footer-modern">
        <div className="footer-container">
          {/* Branding Section */}
          <div className="footer-top">
            <div className="brand-section">
              {/* <h3>Your Name</h3> */}
              <p>Crafting web experiences with creativity and precision.</p>
            </div>
  
            {/* Social Media Section */}
            <div className="social-section">
              <h4>Social Connections</h4>
              <div className="social-links">
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/sharanudhammur/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                  <FaLinkedin />
                </a>
                {/* <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                  <FaSquareXTwitter/>
                </a> */}
                {/* <a href="https://dribbble.com/your-username" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-dribbble"></i>
                  < FaTwitter />
                </a> */}
              </div>
            </div>
          </div>
  
          {/* Contact Section */}
          <div className="contact-section">
            <p>Feel free to reach out to me</p>
            <div className="contact-details">
              <p>Email: <a href="sharandhammur@gmail.com">sharandhammur@gmail.com</a></p>
              <p>Phone: <strong>+91 8088 117092</strong></p>
            </div>
          </div>
  
          {/* Footer Bottom Section */}
          <div className="footer-bottom">
            <p>&copy; {currentYear} Your Name. Designed with ❤️ and React.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;