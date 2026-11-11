import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaFileDownload, FaMapMarkerAlt } from "react-icons/fa";
import "./index.css";
import Skills from "../skills/skills";
import { basePath } from "../../constant";
import { highlights, profile } from "../../data/portfolio";
import { useReveal } from "../../hooks/useReveal";

const Index = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const phrases = profile.focusAreas;
  useReveal();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2500);

    return () => clearTimeout(timer);
  }, [currentWordIndex, phrases.length]);

  return (
    <main className="page">
      <section className="section hero">
        <div className="hero-text">
          <span className="eyebrow">Hi, I'm</span>
          <h1 className="hero-name">{profile.name}</h1>
          <h2 className="hero-title">{profile.title}</h2>
          <p className="hero-summary">{profile.summary}</p>
          <p className="hero-focus">
            Focused on{" "}
            <span key={currentWordIndex} className="phrase">
              {phrases[currentWordIndex]}
            </span>
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              View Projects <FaArrowRight aria-hidden="true" />
            </Link>
            <a
              href={basePath + profile.resume}
              className="btn btn-ghost"
              target="_blank"
              rel="noreferrer"
            >
              <FaFileDownload aria-hidden="true" /> Resume
            </a>
          </div>
          <p className="hero-location">
            <FaMapMarkerAlt aria-hidden="true" /> {profile.company} ·{" "}
            {profile.location}
          </p>
        </div>
        <div className="home-image-container">
          <img
            className="image"
            src={basePath + "/images/Women_coding.avif"}
            alt="Illustration of a woman working at a computer"
            width={450}
            height={350}
          />
        </div>
      </section>

      <section className="section highlights" aria-label="Highlights">
        {highlights.map((item) => (
          <div key={item.label} className="card highlight" data-reveal>
            <span className="highlight-value">{item.value}</span>
            <span className="highlight-label">{item.label}</span>
          </div>
        ))}
      </section>

      <Skills />
    </main>
  );
};

export default Index;
