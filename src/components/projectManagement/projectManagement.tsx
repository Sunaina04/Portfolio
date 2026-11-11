import React from "react";
import { IconType } from "react-icons";
import {
  FaCalculator,
  FaChartLine,
  FaComments,
  FaLayerGroup,
  FaRocket,
  FaShieldAlt,
  FaSyncAlt,
  FaUsers,
} from "react-icons/fa";
import "./projectManagement.css";
import { PmIcon, pmCompetencies } from "../../data/portfolio";

const icons: Record<PmIcon, IconType> = {
  agile: FaSyncAlt,
  stakeholders: FaComments,
  estimation: FaCalculator,
  resources: FaLayerGroup,
  tracking: FaChartLine,
  risk: FaShieldAlt,
  teams: FaUsers,
  releases: FaRocket,
};

const ProjectManagement = () => {
  return (
    <section className="section" id="project-management">
      <span className="eyebrow">Delivery leadership</span>
      <h2 className="section-title">Project Management</h2>
      <p className="section-lead">
        As Project Manager at Genboot since April 2024, I own delivery of
        multiple software projects from planning to production.
      </p>
      <div className="pm-grid">
        {pmCompetencies.map(({ icon, title, text }) => {
          const Icon = icons[icon];
          return (
            <div key={title} className="card pm-card" data-reveal>
              <span className="pm-icon" aria-hidden="true">
                <Icon />
              </span>
              <h3 className="pm-title">{title}</h3>
              <p className="pm-text">{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectManagement;
