import React from "react";
import Link from "../pageLink/pageLink";
import "./skills.css";
import SectionHead from "../sectionHead/sectionHead";
import { projects, toolkit, ToolkitGroup } from "../../data/portfolio";

// "OpenAI API" and "OpenAI", "React.js" and "react.js" etc. count as the same tool.
const normalise = (name: string) => name.toLowerCase().replace(/ api$/, "").trim();

// Case studies whose stack uses at least one tool from this group.
const seenIn = (group: ToolkitGroup) => {
  const names = new Set(group.skills.map((s) => normalise(s.name)));
  return projects.filter((p) => p.stack.some((tool) => names.has(normalise(tool))));
};

const total = toolkit.reduce((sum, g) => sum + g.skills.length, 0);

const Skills = () => (
  <section id="skills" className="section" aria-labelledby="skills-title">
    <div className="wrap">
      <SectionHead
        index="06"
        label="Toolkit"
        id="skills-title"
        title={
          <>
            The <em>tools</em> behind the work.
          </>
        }
      >
        <p>
          {total} tools and practices across five areas. The ones set large are the core of my
          work — the skills I lead with.
        </p>
      </SectionHead>

      <div className="bento">
        {toolkit.map((group, i) => {
          const related = seenIn(group);
          const core = group.skills.filter((s) => s.core);
          const rest = group.skills.filter((s) => !s.core);
          return (
            <article
              key={group.id}
              className={`tile tile--${group.id}`}
              data-reveal
              style={{ "--delay": `${(i % 2) * 0.08}s` } as React.CSSProperties}
              aria-labelledby={`tile-${group.id}`}
            >
              <header className="tile-head">
                <span className="mono">
                  {String(i + 1).padStart(2, "0")} — {group.label}
                </span>
                <span className="tile-count">
                  <span className="serif">{group.skills.length}</span>
                  <span className="mono">tools</span>
                </span>
              </header>

              <h3 id={`tile-${group.id}`} className="tile-title display">
                {group.title}
              </h3>

              <div className="tile-skills">
                {core.length > 0 && (
                  <ul className="tile-core" aria-label="Core skills">
                    {core.map((s) => (
                      <li key={s.name} className="serif">
                        {s.name}
                      </li>
                    ))}
                  </ul>
                )}
                <ul className="tile-rest" aria-label={core.length ? "Also" : "Skills"}>
                  {rest.map((s) => (
                    <li key={s.name}>{s.name}</li>
                  ))}
                </ul>
              </div>

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
