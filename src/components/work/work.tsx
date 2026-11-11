import React, { useRef, useState } from "react";
import Link from "../pageLink/pageLink";
import { FiArrowUpRight } from "react-icons/fi";
import "./work.css";
import SectionHead from "../sectionHead/sectionHead";
import ProjectCover from "../projectCover/projectCover";
import { projects } from "../../data/portfolio";

const Work = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  // Cursor-following preview (desktop pointers only, see work.css).
  const onMove = (e: React.MouseEvent) => {
    // Flip to the left of the cursor near the right edge (preview is 520px wide).
    const x = e.clientX + 548 > window.innerWidth ? e.clientX - 576 : e.clientX;
    previewRef.current?.style.setProperty("--x", `${x}px`);
    previewRef.current?.style.setProperty("--y", `${e.clientY}px`);
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
              Six projects — software, <em>AI</em> and a content platform of my own.
            </>
          }
        />

        <ol className="work-list" onMouseMove={onMove} onMouseLeave={() => setHovered(null)}>
          {projects.map((project, i) => (
            <li key={project.slug} data-reveal style={{ "--delay": `${i * 0.06}s` } as React.CSSProperties}>
              <Link
                to={`/work/${project.slug}`}
                className="work-row"
                onMouseEnter={() => setHovered(i)}
                onFocus={() => setHovered(null)}
              >
                <span className="work-index mono">{String(i + 1).padStart(2, "0")}</span>
                <span className="work-thumb" aria-hidden="true">
                  <ProjectCover project={project} index={i} compact />
                </span>
                <span className="work-name display">{project.name}</span>
                <span className="work-meta">
                  <span className="work-summary">{project.summary}</span>
                  <span className="mono">
                    {project.focus} · {project.context ? "At Genboot" : "Independent"}
                  </span>
                </span>
                <span className="work-arrow" aria-hidden="true">
                  <FiArrowUpRight />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>

      <div
        ref={previewRef}
        className={`work-preview${hovered !== null ? " is-visible" : ""}`}
        aria-hidden="true"
      >
        {projects.map((project, i) => (
          <div key={project.slug} className={`work-preview-item${hovered === i ? " is-active" : ""}`}>
            <ProjectCover project={project} index={i} compact />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
