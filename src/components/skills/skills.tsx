import React from "react";
import { IconType } from "react-icons";
import {
  SiAmazonaws,
  SiAstro,
  SiBootstrap,
  SiCelery,
  SiConfluence,
  SiCss3,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJira,
  SiJquery,
  SiKubernetes,
  SiLinux,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiAntdesign,
} from "react-icons/si";
import "./skills.css";
import { skillGroups } from "../../data/portfolio";

const skillIcons: Record<string, IconType> = {
  Python: SiPython,
  FastAPI: SiFastapi,
  Django: SiDjango,
  Celery: SiCelery,
  JavaScript: SiJavascript,
  "Vanilla JavaScript": SiJavascript,
  TypeScript: SiTypescript,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Astro.js": SiAstro,
  jQuery: SiJquery,
  "React Query": SiReactquery,
  "React Testing Library": SiTestinglibrary,
  Jest: SiJest,
  "Redux Toolkit": SiRedux,
  "RTK Query": SiRedux,
  "Tailwind CSS": SiTailwindcss,
  "Material UI": SiMui,
  "Ant Design": SiAntdesign,
  Bootstrap: SiBootstrap,
  Jira: SiJira,
  Confluence: SiConfluence,
  "OpenAI API": SiOpenai,
  PostgreSQL: SiPostgresql,
  PGVector: SiPostgresql,
  MySQL: SiMysql,
  "MySQL Workbench": SiMysql,
  Redis: SiRedis,
  "AWS (EC2, ECS, SQS, SNS)": SiAmazonaws,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Linux: SiLinux,
  Git: SiGit,
};

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <span className="eyebrow">What I work with</span>
      <h2 className="section-title">Skills</h2>
      <p className="section-lead">
        A blend of delivery leadership and hands-on engineering — from sprint
        planning and stakeholder management to backend services and LLM
        integrations.
      </p>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="card skill-card" data-reveal>
            <h3 className="skill-card-title">{group.title}</h3>
            <ul className="chip-list">
              {group.skills.map((skill) => {
                const Icon = skillIcons[skill];
                return (
                  <li key={skill} className="chip skill-chip">
                    {Icon && <Icon aria-hidden="true" />}
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
