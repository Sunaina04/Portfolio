import React from "react";
import { FaHome, FaInfoCircle, FaProjectDiagram, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./header.css";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`navbar ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="nav-item">
        <Link to="/">
          <FaHome className="icon" />
          <span>Home</span>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/about">
          <FaInfoCircle className="icon" />
          <span>About</span>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/projects">
          <FaProjectDiagram className="icon" />
          <span>Projects</span>
        </Link>
      </div>
      <div className="theme-icon" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <FaSun className="icon" />
        ) : (
          <FaMoon className="icon" style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Header;
