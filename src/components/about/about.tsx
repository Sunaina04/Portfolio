import React from "react";
import "./about.css";
import Experience from "../experience/experience";
import Education from "../education/education";
import { useTheme } from "../../context/ThemeContext";

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="main">
      <div
        className={`aboutParentContainer ${
          isDarkMode ? "dark-mode" : "light-mode"
        }`}
      >
        <div className="aboutContent">
          <h1 className="headerText">Hi, I'm Sunaina</h1>
          <p className="contentText">
            I turn vision into reality with code. Whether I'm working on a
            website or any digital product, I bring my commitment to design
            excellence and user-centered thinking to every project I work on.
          </p>
          <p className="contentText">
            Explore my latest projects showcasing my expertise in Reactjs,
            Javascript, Typescript and web development.
          </p>
          <div className="locationContainer">
            <img
              alt="Indian flag"
              loading="lazy"
              decoding="async"
              src="https://flagcdn.com/in.svg"
              width="15"
              height="15"
            />
            <span className="locationText">Amritsar, India</span>
          </div>
        </div>
        <div className="image-container">
          <img
            className="image"
            src="/images/Programmer.avif"
            alt="Your Image Alt Text"
            width={400}
            height={300}
          />
          <div className="image-overlay"></div>
        </div>
      </div>
      <Experience />
      <Education />
    </div>
  );
};

export default About;
