import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./projects.css";
import { basePath } from "../../constant";
import { projects } from "../../data/portfolio";
import { useReveal } from "../../hooks/useReveal";

const Projects = () => {
  useReveal();

  return (
    <main className="page">
      <section className="section">
        <span className="eyebrow">Selected work</span>
        <h1 className="section-title projectHeading">Projects</h1>
        <p className="section-lead">
          Projects I contributed to as an engineer. Each card lists my
          hands-on technical contributions; my delivery and team-leadership
          responsibilities are covered under{" "}
          <Link to="/about#project-management">Project Management</Link>.
        </p>
        <div className="projects-container">
          {projects.map((project) => (
            <article key={project.name} className="card project-box" data-reveal>
              <div className="project-media">
                {project.image ? (
                  <img
                    src={basePath + project.image}
                    alt={`${project.name} screenshot`}
                    loading="lazy"
                  />
                ) : (
                  <span className="project-monogram" aria-hidden="true">
                    {project.name}
                  </span>
                )}
              </div>
              <div className="project-details">
                <div className="project-heading">
                  <h2>{project.name}</h2>
                  <span className="project-focus">{project.focus}</span>
                </div>
                <p className="project-summary">{project.summary}</p>

                <h3 className="project-label">Tech stack</h3>
                <ul className="chip-list">
                  {project.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>

                <h3 className="project-label">Technical contributions</h3>
                <ul className="project-points">
                  {project.contributions.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                {project.link && (
                  <a
                    href={project.link}
                    className="btn btn-ghost project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit project <FaExternalLinkAlt aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
