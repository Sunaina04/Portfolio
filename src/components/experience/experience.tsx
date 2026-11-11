import React from "react";
import "./experience.css";
import SectionHead from "../sectionHead/sectionHead";
import { basePath } from "../../constant";
import { education, experience, profile } from "../../data/portfolio";

const Experience = () => (
  <section id="experience" className="section" aria-labelledby="experience-title">
    <div className="wrap">
      <SectionHead
        index="04"
        label="Employment"
        id="experience-title"
        title={
          <>
            6+ years at Genboot, from <em>engineer</em> to project manager.
          </>
        }
      >
        <p>
          My full-time employment history. The services above are offered independently, outside
          this role.
        </p>
      </SectionHead>

      <ol className="roles">
        {experience.map((role) => (
          <li key={role.title} className={`role${role.current ? " is-current" : ""}`} data-reveal>
            <div className="role-dates">
              <span className="mono">
                {role.start} — {role.end}
              </span>
              {role.current && <span className="role-badge mono">Current</span>}
            </div>
            <div className="role-head">
              <h3 className="role-title display">{role.title}</h3>
              <p className="role-company">
                {role.company} · {role.location}
              </p>
            </div>
            <div className="role-body">
              <p className="role-summary">{role.summary}</p>
              <ul className="role-points">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <p className="exp-education">
        <span className="mono">Education</span>
        <span>
          {education.map((e) => `${e.degree} (${e.year})`).join(" and ")},{" "}
          {education[0].school}.
        </span>
        <a href={basePath + profile.resume} className="link" download="Sunaina_Resume.pdf">
          Full resume (PDF)
        </a>
      </p>
    </div>
  </section>
);

export default Experience;
