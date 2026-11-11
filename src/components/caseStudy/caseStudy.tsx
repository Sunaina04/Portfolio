import React, { ReactNode } from "react";
import { Navigate, useParams } from "react-router-dom";
import Link from "../pageLink/pageLink";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import "./caseStudy.css";
import ProjectCover from "../projectCover/projectCover";
import ReadingProgress from "../readingProgress/readingProgress";
import { basePath } from "../../constant";
import { projects, services } from "../../data/portfolio";
import { ModeTag } from "../services/services";
import { useReveal } from "../../hooks/useReveal";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const Block = ({ label, children }: { label: string; children: ReactNode }) => (
  <section className="cs-block" data-reveal>
    <h2 className="cs-label mono">{label}</h2>
    <div className="cs-content">{children}</div>
  </section>
);

const CaseStudy = () => {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  useReveal(slug);
  useDocumentTitle(project?.name);

  if (!project) return <Navigate to={{ pathname: "/", hash: "#work" }} replace />;

  const next = projects[(index + 1) % projects.length];
  const service = services.find((s) => s.id === project.service);
  const stackLabel = project.stackLabel ?? "Technologies";
  const host = project.link?.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <main id="main" className="case-study">
      <ReadingProgress />
      <div className="wrap">
        <nav className="cs-crumbs mono" aria-label="Breadcrumb">
          <Link to={{ pathname: "/", hash: "#work" }} className="cs-back">
            <FiArrowLeft aria-hidden="true" /> All work
          </Link>
          <span>
            Case study {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
        </nav>

        <header className="cs-hero">
          <h1 className="cs-title display">{project.name}</h1>
          <p className="cs-summary serif">{project.summary}.</p>
          <p className="cs-context mono">{project.context ?? "Independent — my own project"}</p>
        </header>

        <dl className="cs-facts">
          <div>
            <dt className="mono">Type</dt>
            <dd>{project.kind}</dd>
          </div>
          <div>
            <dt className="mono">Focus</dt>
            <dd>{project.focus}</dd>
          </div>
          <div>
            <dt className="mono">{project.stackLabel ?? "Core stack"}</dt>
            <dd>{project.stack.slice(0, 3).join(", ")}</dd>
          </div>
          <div>
            <dt className="mono">Live</dt>
            <dd>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer" className="link">
                  {host}
                </a>
              ) : (
                "Not public"
              )}
            </dd>
          </div>
        </dl>

        <div className="cs-cover">
          <ProjectCover project={project} index={index} />
        </div>

        <div className="cs-body">
          <Block label="Overview">
            <p className="cs-lead">{project.overview}</p>
          </Block>
          <Block label="The problem">
            <p className="cs-lead">{project.problem}</p>
          </Block>
          <Block label="My role">
            <p>{project.role}</p>
          </Block>
          <Block label={project.contributionLabel ?? "Technical contribution"}>
            <ol className="cs-list cs-list--numbered">
              {project.contributions.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ol>
          </Block>
          <Block label="Key features">
            <ul className="cs-features">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Block>
          {project.outcomes && (
            <Block label="Outcomes">
              <ul className="cs-list">
                {project.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </Block>
          )}
          <Block label={stackLabel}>
            <p className="cs-stack">{project.stack.join(" / ")}</p>
          </Block>
          {project.screenshot && (
            <Block label="Screens">
              <figure className="cs-shot">
                <img
                  src={basePath + project.screenshot}
                  alt={`${project.name} interface`}
                  loading="lazy"
                />
              </figure>
            </Block>
          )}
          {project.link && (
            <div className="cs-visit" data-reveal>
              <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-solid">
                Visit {project.name} <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          )}
        </div>
      </div>

      {service && (
        <section className="cs-service" aria-labelledby="cs-service-title">
          <div className="wrap cs-service-inner" data-reveal>
            <div>
              <p className="mono">Need something similar?</p>
              <h2 id="cs-service-title" className="cs-service-title display">
                {service.title}
              </h2>
              <p className="cs-service-benefit">{service.benefit}</p>
              <ModeTag mode={service.mode} />
            </div>
            <div className="cs-service-actions">
              <Link
                to={{ pathname: "/", search: `?service=${service.id}`, hash: "#contact" }}
                className="btn btn-solid"
              >
                Discuss your project <FiArrowUpRight aria-hidden="true" />
              </Link>
              <Link to={{ pathname: "/", hash: "#services" }} className="btn">
                All services
              </Link>
            </div>
          </div>
        </section>
      )}

      <Link to={`/work/${next.slug}`} className="cs-next">
        <div className="wrap">
          <span className="mono">Next case study</span>
          <span className="cs-next-name display">
            {next.name} <FiArrowRight aria-hidden="true" />
          </span>
        </div>
      </Link>
    </main>
  );
};

export default CaseStudy;
