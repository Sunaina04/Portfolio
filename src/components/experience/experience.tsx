import React from "react";
import { FaBriefcase } from "react-icons/fa";
import "./experience.css";
import { experience } from "../../data/portfolio";

const Experience = () => {
  return (
    <section className="section" id="experience">
      <span className="eyebrow">Career</span>
      <h2 className="section-title">Work Experience</h2>
      <p className="section-lead">
        6+ years at Genboot, progressing from Senior Software Engineer to
        leading project delivery as a Project Manager.
      </p>
      <ol className="exp-timeline">
        {experience.map((role) => (
          <li key={role.title} className="exp-item" data-reveal>
            <span className="exp-marker" aria-hidden="true">
              <FaBriefcase />
            </span>
            <article className="card exp-container">
              <header className="exp-header">
                <div>
                  <h3 className="exp-subtitle">{role.title}</h3>
                  <p className="exp-company">
                    {role.company} · {role.location}
                  </p>
                </div>
                <span className={`exp-period${role.current ? " current" : ""}`}>
                  {role.period}
                </span>
              </header>
              <ul className="exp-points">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
