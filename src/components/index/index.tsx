import React, { useEffect, useState } from "react";
import "./index.css";
import Skills from "../skills/skills";
import Header from "../header/header";
import { useTheme } from "../../context/ThemeContext";
import ContactForm from "../contactForm/contactForm";
import { basePath } from "../../constant";

const Index = () => {
  const { isDarkMode } = useTheme();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const phrasesToRepeat = [
    "Beautiful UI",
    "Modern UX",
    "Performance",
    "Best UX",
    "Latest Tech",
    "Responsiveness",
  ];

  // Function to generate random color
  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentWordIndex(
        (prevIndex) => (prevIndex + 1) % phrasesToRepeat.length
      );
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentWordIndex, phrasesToRepeat.length]);

  return (
    <div className={`main ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      {" "}
      <div className={`header ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        {" "}
        <h1>Sunaina</h1>
      </div>
      <Header />
      <div className={`container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        {" "}
        <div className="text">
          <h1>I'm a Software Engineer</h1>
          <p>Currently making Web Apps having</p>
          <div className="phrase" style={{ color: generateRandomColor() }}>
            {phrasesToRepeat[currentWordIndex]}
          </div>
        </div>
        <div className="home-image-container">
          <img
            className="image"
            src={basePath + "/images/Women_coding.avif"}
            alt="Your Image Alt Text"
            width={400}
            height={300}
          />
          <div className="image-overlay"></div>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default Index;
