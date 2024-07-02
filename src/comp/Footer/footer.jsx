import React from "react";
import './footer.css' 
import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer_full">
      <div className="footer_con">
        <a className="footer_item" href="/">
          Developed with <span role="img" aria-label="heart">❤</span> by the TEIT  of SIES GST
        </a>
        <div className="footer_icon">
          <a href="https://www.linkedin.com/company/technical-team-sies-gst/mycompany/" target="_blank" rel="noopener noreferrer" aria-label="linkedin" className="linkedin_icon">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/technicalteam_siesgst/" target="_blank" rel="noopener noreferrer" aria-label="instagram" className="instagram_icon">
            <FaInstagram />
          </a>
          <a href="https://github.com/siesgst-tech" target="_blank" rel="noopener noreferrer" aria-label="github" className="github_icon">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/SIESGSTEvents" target="_blank" rel="noopener noreferrer" aria-label="facebook" className="facebook_icon">
            <FaFacebook />
          </a>
        </div>
      </div>
      <p className="copy">
      Copyright ⓒ {currentYear}
      </p>
    </footer>
  );
}

export default Footer;
