import React from "react";
import "./experience.css";
import { useTheme } from "../../context/ThemeContext";

const Experience = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <div className="exp-title">Work Experience</div>
      <div
        className={`expParentContainer ${
          isDarkMode ? "dark-mode" : "light-mode"
        }`}
      >
        {" "}
        <div
          className={`exp-container ${isDarkMode ? "dark-mode" : "light-mode"}`}
        >
          <div className="exp-subtitle">
            Software Engineer at Genboot (June 2022 – Present)
          </div>
          <p className="exp-text">
            As a Software Engineer at Genboot, I developed and implemented
            software applications, ensuring their functionality and performance.
            I conducted thorough testing and collaborated closely with my team
            to enhance our projects. Additionally, I actively pursued learning
            opportunities to improve our software solutions and fostered
            effective communication within the team.
          </p>
        </div>
      </div>
    </>
  );
};

export default Experience;
