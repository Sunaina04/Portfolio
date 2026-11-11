import React from "react";
import {
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./header.css";
import { useTheme } from "../../context/ThemeContext";

const links = [
  { to: "/", label: "Home", Icon: FaHome },
  { to: "/about", label: "About", Icon: FaInfoCircle },
  { to: "/projects", label: "Projects", Icon: FaProjectDiagram },
];

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="navbar" aria-label="Main">
      {links.map(({ to, label, Icon }) => (
        <NavLink
          key={to}
          to={to}
          end
          className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
        >
          <Icon className="icon" aria-hidden="true" />
          <span>{label}</span>
        </NavLink>
      ))}
      <a className="nav-item" href="#contact">
        <FaEnvelope className="icon" aria-hidden="true" />
        <span>Contact</span>
      </a>
      <button
        type="button"
        className="theme-icon"
        onClick={toggleDarkMode}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Header;
