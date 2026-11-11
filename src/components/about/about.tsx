import React from "react";
import "./about.css";
import SectionHead from "../sectionHead/sectionHead";
import { identities, profile } from "../../data/portfolio";

const About = () => (
  <section id="about" className="section about" aria-labelledby="about-title">
    <div className="wrap">
      <SectionHead
        index="01"
        label="About"
        id="about-title"
        title={
          <>
            I can plan it, build it, and <em>see it through.</em>
          </>
        }
      >
        {profile.about.map((p) => (
          <p key={p.slice(0, 20)}>{p}</p>
        ))}
      </SectionHead>

      <ol className="identities">
        {identities.map((item, i) => (
          <li
            key={item.title}
            className="identity"
            data-reveal
            style={{ "--delay": `${(i % 3) * 0.08}s` } as React.CSSProperties}
          >
            <span className="mono">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="identity-title display">{item.title}</h3>
            <p className="identity-text">{item.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default About;
