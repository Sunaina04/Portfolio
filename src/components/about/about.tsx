import React from "react";
import { FaFileDownload, FaMapMarkerAlt } from "react-icons/fa";
import "./about.css";
import Experience from "../experience/experience";
import ProjectManagement from "../projectManagement/projectManagement";
import Education from "../education/education";
import { basePath } from "../../constant";
import { profile } from "../../data/portfolio";
import { useReveal } from "../../hooks/useReveal";

const About = () => {
  useReveal();

  return (
    <main className="page">
      <section className="section about">
        <div className="aboutContent">
          <span className="eyebrow">About me</span>
          <h1 className="headerText">Hi, I'm {profile.name}</h1>
          <p className="about-role">{profile.title}</p>
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="contentText">
              {paragraph}
            </p>
          ))}
          <div className="about-footer">
            <span className="locationContainer">
              <FaMapMarkerAlt aria-hidden="true" />
              {profile.company} · {profile.location}
            </span>
            <a
              href={basePath + profile.resume}
              className="btn btn-ghost"
              target="_blank"
              rel="noreferrer"
            >
              <FaFileDownload aria-hidden="true" /> Download Resume
            </a>
          </div>
        </div>
        <div className="image-container">
          <img
            className="image"
            src={basePath + "/images/Programmer.avif"}
            alt="Illustration of a programmer at a desk"
            width={450}
            height={350}
          />
        </div>
      </section>
      <Experience />
      <ProjectManagement />
      <Education />
    </main>
  );
};

export default About;
