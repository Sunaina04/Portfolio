import React, { ReactNode, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Link from "../pageLink/pageLink";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiPlay } from "react-icons/fi";
import "./caseStudy.css";
import ProjectCover from "../projectCover/projectCover";
import ReadingProgress from "../readingProgress/readingProgress";
import { basePath } from "../../constant";
import { CaseSection, Project, projects, services } from "../../data/portfolio";
import { ModeTag } from "../services/services";
import { useReveal } from "../../hooks/useReveal";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const Block = ({ label, children }: { label: string; children: ReactNode }) => (
  <section className="cs-block" data-reveal>
    <h2 className="cs-label mono">{label}</h2>
    <div className="cs-content">{children}</div>
  </section>
);

const ExtraSection = ({ section }: { section: CaseSection }) => {
  const List = section.numbered ? "ol" : "ul";
  return (
    <Block label={section.label}>
      {section.intro && <p className={section.items ? "cs-intro" : "cs-lead"}>{section.intro}</p>}
      {section.items && (
        <List className={`cs-list${section.numbered ? " cs-list--numbered" : ""}`}>
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </List>
      )}
      {section.outro && <p className="cs-outro serif">{section.outro}</p>}
    </Block>
  );
};

// Shows a poster first and only loads YouTube when the visitor presses play
// (keeps pages fast and avoids third-party requests until then).
const VideoFacade = ({ video }: { video: NonNullable<Project["video"]> }) => {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className="cs-video">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" className="cs-video-poster" onClick={() => setPlaying(true)}>
          <img src={basePath + video.poster} alt="" loading="lazy" />
          <span className="cs-video-play">
            <FiPlay aria-hidden="true" /> Play video
          </span>
          <span className="visually-hidden">{video.title}</span>
        </button>
      )}
    </figure>
  );
};

const defaultFacts = (project: Project) => {
  const host = project.link?.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return [
    { label: "Type", value: project.kind },
    { label: "Focus", value: project.focus },
    { label: project.stackLabel ?? "Core stack", value: project.stack.slice(0, 3).join(", ") },
    {
      label: "Live",
      value: project.link ? (
        <a href={project.link} target="_blank" rel="noreferrer" className="link">
          {host}
        </a>
      ) : (
        "Not public"
      ),
    },
  ];
};

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
  const facts: { label: string; value: ReactNode }[] = project.facts ?? defaultFacts(project);
  const showScreenshot = project.screenshot && project.screenshot !== project.cover;

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
          {project.context && <p className="cs-context mono">{project.context}</p>}
        </header>

        <dl className="cs-facts">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="mono">{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className="cs-cover">
          {project.cover ? (
            <figure className="cs-cover-image">
              <img src={basePath + project.cover} alt={`${project.name} product screens`} />
            </figure>
          ) : (
            <ProjectCover project={project} index={index} />
          )}
        </div>

        <div className="cs-body">
          <Block label="Overview">
            <p className="cs-lead">{project.overview}</p>
          </Block>
          <Block label="The problem">
            <p className="cs-lead">{project.problem}</p>
          </Block>
          {project.role && (
            <Block label="My role">
              <p>{project.role}</p>
            </Block>
          )}
          {project.contributions && (
            <Block label={project.contributionLabel ?? "Technical contribution"}>
              <ol className="cs-list cs-list--numbered">
                {project.contributions.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ol>
            </Block>
          )}
          <Block label={project.featuresLabel ?? "Key features"}>
            <ul className="cs-features">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Block>
          {project.sections?.map((section) => (
            <ExtraSection key={section.label} section={section} />
          ))}
          {project.articles && (
            <Block label="Selected articles">
              <ul className="cs-articles">
                {project.articles.map((a) => (
                  <li key={a.url}>
                    <a href={a.url} target="_blank" rel="noreferrer" className="cs-article">
                      <span className="cs-article-title serif">{a.title}</span>
                      <span className="mono">{a.language} ↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Block>
          )}
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
          {project.video && (
            <Block label="Video">
              <VideoFacade video={project.video} />
            </Block>
          )}
          {(project.gallery || showScreenshot) && (
            <Block label="Screens">
              <div className={`cs-gallery cs-gallery--${project.gallery?.[0]?.shape ?? "wide"}`}>
                {project.gallery?.map((g) => (
                  <figure key={g.src} className="cs-shot">
                    <img src={basePath + g.src} alt={g.alt} loading="lazy" />
                  </figure>
                ))}
                {showScreenshot && (
                  <figure className="cs-shot">
                    <img
                      src={basePath + project.screenshot}
                      alt={`${project.name} interface`}
                      loading="lazy"
                    />
                  </figure>
                )}
              </div>
            </Block>
          )}
          {project.cover && (
            <Block label="System sketch">
              <ProjectCover project={project} index={index} />
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
