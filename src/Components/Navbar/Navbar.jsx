import { useState } from "react";
import { assets } from "../../assets/asset";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for Hamburger and Close
import "./Navbar.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaAngleDown,
  FaSearch,
} from "react-icons/fa";
const Navbar = () => {
  const [isopen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isopen);
  };

  return (
    <>
      <div className="header-nav">
        <div className="right-section">
          <a href="mailto:www.registerkaro.in" className="nav-item">
            <FaEnvelope className="icon" /> www.registerkaro.in
            <div className="vertical-sign"></div>
          </a>
          <a href="tel:+918447746183" className="nav-item">
            <FaPhoneAlt className="icon" /> +91 8447746183
            <div className="vertical-sign"></div>
          </a>

          <div className="Nav-social">
            <a href="#" className="social-icon">
              <FaFacebook />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon">
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>

      <div className="navbar-menu">
        {/* left-section */}
        <img
          src={assets.christmascap}
          alt="chirstmas-logo"
          className="minor-logo"
        />
        <img src={assets.Logo} alt="Logo" className="Main-logo" />

        {/* Hamburger Button */}
        <button className="hamburger" onClick={toggleMenu}>
          {isopen ? <FaTimes /> : <FaBars />}
        </button>
        {/* Right section */}

        <div className="right-nav">
          <ul>
            <a href="#">Home</a>
            <a href="#">
              Our Service <FaAngleDown className="arrow-icon" />
            </a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
            <a href="#">About us</a>
          </ul>
          <div className="Expert-btn">
            <button>Talk An Expert</button>
          </div>
        </div>

        {isopen ? (
          <div className="nav-links">
            <ul>
              <a href="#">Home</a>
              <a href="#">
                Our Service <FaAngleDown className="arrow-icon" />
              </a>
              <a href="#">Blog</a>
              <a href="#">Contact Us</a>
              <a href="#">
                About us
                <div className="search-icon">
                  <FaSearch className="fasearch" />
                </div>
              </a>
            </ul>

            <div className="Expert-btn">
              <button>Talk An Expert</button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Navbar;
