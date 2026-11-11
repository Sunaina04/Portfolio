import React, { useRef, useState } from "react";
import Link from "../pageLink/pageLink";
import { FiArrowUpRight } from "react-icons/fi";
import "./work.css";
import SectionHead from "../sectionHead/sectionHead";
import ProjectCover from "../projectCover/projectCover";
import { domains, moreProjects, Project, projects } from "../../data/portfolio";

// The drawn system sketch; real screens live on the case study page.
const Visual = ({ project, index }: { project: Project; index: number }) => (
  <ProjectCover project={project} index={index} compact />
);

const Work = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  // Preview follows the cursor sideways but sits above or below the hovered
  // row, over the dimmed rows, so it never covers the text being read.
  const onMove = (e: React.MouseEvent) => {
    const preview = previewRef.current;
    const row = (e.target as HTMLElement).closest(".work-row");
    if (!preview || !row) return;
    const r = row.getBoundingClientRect();
    const w = preview.offsetWidth;
    const h = preview.offsetHeight;
    const gap = 12;
    const x = Math.min(Math.max(e.clientX - w / 2, 16), window.innerWidth - w - 16);
    // Above when there is room under the 80px header, otherwise below.
    const y = r.top - h - gap > 80 ? r.top - h - gap : r.bottom + gap;
    preview.style.setProperty("--x", `${x}px`);
    preview.style.setProperty("--y", `${y}px`);
  };

  return (
    <section id="work" className="section work" aria-labelledby="work-title">
      <div className="wrap">
        <SectionHead
          index="02"
          label="Selected work"
          id="work-title"
          title={
            <>
              Products I've helped <em>plan, build and deliver.</em>
            </>
          }
        >
          <p>
            {projects.length} case studies across AI, logistics, business software and content —
            from leading a 12+ person delivery to writing the backend myself.
          </p>
        </SectionHead>

        <div className="work-groups" onMouseMove={onMove} onMouseLeave={() => setHovered(null)}>
          {domains.map((domain) => {
            const inDomain = projects.filter((p) => p.domain === domain.id);
            if (!inDomain.length) return null;
            return (
              <div key={domain.id} className="work-group">
                <h3 className="work-domain mono">
                  {domain.title} <span>{inDomain.length}</span>
                </h3>
                <ol className="work-list">
                  {inDomain.map((project) => {
                    const i = projects.indexOf(project);
                    return (
                      <li key={project.slug} data-reveal>
                        <Link
                          to={`/work/${project.slug}`}
                          className="work-row"
                          onMouseEnter={() => setHovered(i)}
                          onFocus={() => setHovered(null)}
                        >
                          <span className="work-index mono">{String(i + 1).padStart(2, "0")}</span>
                          <span className="work-thumb" aria-hidden="true">
                            <Visual project={project} index={i} />
                          </span>
                          <span className="work-name display">{project.name}</span>
                          <span className="work-meta">
                            <span className="work-summary">{project.summary}</span>
                            <span className="mono">
                              {project.focus}
                              {project.contextShort && ` · ${project.contextShort}`}
                            </span>
                          </span>
                          <span className="work-arrow" aria-hidden="true">
                            <FiArrowUpRight />
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ol>
              </div>
            );
          })}
        </div>

        {moreProjects.length > 0 && (
          <div className="work-more" data-reveal>
            <h3 className="work-domain mono">More projects</h3>
            <ul>
              {moreProjects.map((p) => (
                <li key={p.name}>
                  <span className="work-more-name serif">{p.name}</span>
                  <span className="work-more-note">{p.note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div
        ref={previewRef}
        className={`work-preview${hovered !== null ? " is-visible" : ""}`}
        aria-hidden="true"
      >
        {projects.map((project, i) => (
          <div key={project.slug} className={`work-preview-item${hovered === i ? " is-active" : ""}`}>
            <Visual project={project} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
