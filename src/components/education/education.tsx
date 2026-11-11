import React from "react";
import "./education.css";
import SectionHead from "../sectionHead/sectionHead";
import { education } from "../../data/portfolio";

const Education = () => (
  <section id="education" className="section" aria-labelledby="education-title">
    <div className="wrap">
      <SectionHead index="07" label="Education" id="education-title" title="Education" />
      <ol className="edu">
        {education.map((item) => (
          <li key={item.degree} className="edu-row" data-reveal>
            <span className="mono">{item.date}</span>
            <div>
              <h3 className="edu-degree serif">{item.degree}</h3>
              <p className="edu-school">
                {item.school}, {item.location}
              </p>
            </div>
            <span className="edu-score serif">{item.score}</span>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Education;
