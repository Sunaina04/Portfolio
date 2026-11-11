import React from "react";
import Link from "../pageLink/pageLink";
import "./skills.css";
import SectionHead from "../sectionHead/sectionHead";
import { basePath } from "../../constant";
import { profile, projects, toolkit, ToolkitGroup } from "../../data/portfolio";

// "OpenAI API" and "OpenAI", "React" and "React.js" etc. count as the same tool.
const normalise = (name: string) =>
  name.toLowerCase().replace(/ api$/, "").replace(/\.js$/, "").trim();

// Case studies whose stack uses at least one tool from this group.
const seenIn = (group: ToolkitGroup) => {
  const names = new Set(group.skills.map(normalise));
  return projects.filter((p) => p.stack.some((tool) => names.has(normalise(tool))));
};

const Skills = () => (
  <section id="skills" className="section" aria-labelledby="skills-title">
    <div className="wrap">
      <SectionHead
        index="05"
        label="Toolkit"
        id="skills-title"
        title={
          <>
            The core <em>toolkit.</em>
          </>
        }
      >
        <p>
          The tools I rely on most. The{" "}
          <a href={basePath + profile.resume} className="link" download="Sunaina_Resume.pdf">
            full list is in my resume
          </a>
          .
        </p>
      </SectionHead>

      <div className="bento">
        {toolkit.map((group, i) => {
          const related = seenIn(group);
          return (
            <article
              key={group.id}
              className={`tile tile--${group.id}`}
              data-reveal
              style={{ "--delay": `${(i % 2) * 0.08}s` } as React.CSSProperties}
              aria-labelledby={`tile-${group.id}`}
            >
              <span className="mono">
                {String(i + 1).padStart(2, "0")} — {group.label}
              </span>
              <h3 id={`tile-${group.id}`} className="tile-title display">
                {group.title}
              </h3>
              <ul className="tile-core">
                {group.skills.map((s) => (
                  <li key={s} className="serif">
                    {s}
                  </li>
                ))}
              </ul>

              {(related.length > 0 || group.inPractice) && (
                <footer className="tile-foot">
                  <span className="mono">{related.length ? "Seen in" : "In practice"}</span>
                  <span className="tile-links">
                    {related.length
                      ? related.map((p) => (
                          <Link key={p.slug} to={`/work/${p.slug}`} className="link">
                            {p.name}
                          </Link>
                        ))
                      : group.inPractice && (
                          <Link to={group.inPractice.to} className="link">
                            {group.inPractice.label}
                          </Link>
                        )}
                  </span>
                </footer>
              )}
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
