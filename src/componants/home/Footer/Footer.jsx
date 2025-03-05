import React from "react";
import "./Footer.css";
import facebook_icon from "../../../assets/footer/facebook_icon.png";
import youtube_icon from "../../../assets/footer/youtube_icon.png";
import instagram_icon from "../../../assets/footer/instagram_icon.png";
import twitter_icon from "../../../assets/footer/twitter_icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="#" aria-label="Facebook">
          <img src={facebook_icon} alt="Facebook icon" />
        </a>
        <a href="#" aria-label="Instagram">
          <img src={instagram_icon} alt="Instagram icon" />
        </a>
        <a href="#" aria-label="Twitter">
          <img src={twitter_icon} alt="Twitter icon" />
        </a>
        <a href="#" aria-label="YouTube">
          <img src={youtube_icon} alt="YouTube icon" />
        </a>
      </div>
      <ul className="footer-links">
        <li><a href="#">Audio Description</a></li>
        <li><a href="#">Investor Relations</a></li>
        <li><a href="#">Legal Notices</a></li>
        <li><a href="#">Help Centre</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Cookie Preferences</a></li>
        <li><a href="#">Gift Cards</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Corporate Information</a></li>
        <li><a href="#">Media Centre</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <div className="footer-bottom">
        <button className="service-code">Service Code</button>
        <p>&copy; 1997-2025 Netflix, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
