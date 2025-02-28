import "./Footer.css";
import { FaFacebookF, FaGoogle, FaApple, FaInstagram } from "react-icons/fa";
import { assets } from "../../assets/asset";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Social Media */}
        <div className="footer-left">
          <p>
            Design outstanding interfaces with advanced Figma features in a
            matter of minutes.
          </p>
          <div className="social-icons">
            <a href="#" className="icon">
              <FaFacebookF />
            </a>
            <a href="#" className="icon">
              <FaGoogle />
            </a>
            <a href="#" className="icon">
              <FaApple />
            </a>
            <a href="#" className="icon">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Section - Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>START A BUSINESS</h4>
            <ul>
              <li>Features</li>
              <li>Solutions</li>
              <li>Integrations</li>
              <li>Enterprise</li>
              <li>Solutions</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>GOVERNMENT REGISTRATION</h4>
            <ul>
              <li>Partners</li>
              <li>Community</li>
              <li>Developers</li>
              <li>App</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>COMPLIANCE & TAX</h4>
            <ul>
              <li>Channels</li>
              <li>Scale</li>
              <li>Watch the Demo</li>
              <li>Our Competition</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>BIS & CDSCO</h4>
            <ul>
              <li>About Us</li>
              <li>News</li>
              <li>Leadership</li>
              <li>Media Kit</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <button className="back-to-top">
          <img src={assets.Upbutton} alt="upArrow" className="Upbtn" />
        </button>
        <p>© 2024 Registerkaro. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
