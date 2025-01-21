import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"; // Path to your logo image
import "../styles.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <img src={Logo} alt="GameAware Logo" className="logo-img" />
    </div>
    <ul className="nav-links">
      <li><Link to="/" className="nav-link">Home</Link></li>
      <li><Link to="/gaming" className="nav-link">Gaming</Link></li>
      <li><Link to="/gambling" className="nav-link">Gambling</Link></li>
      <li><Link to="/resources" className="nav-link">Resources</Link></li>
      <li><Link to="/quiz" className="nav-link">Quiz</Link></li>
    </ul>
  </nav>
);

export default Navbar;
