import React from "react";
import "./experience.css";
import SectionHead from "../sectionHead/sectionHead";
import { experience } from "../../data/portfolio";

const Experience = () => (
  <section id="experience" className="section" aria-labelledby="experience-title">
    <div className="wrap">
      <SectionHead
        index="05"
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
    </div>
  </section>
);

export default Experience;
