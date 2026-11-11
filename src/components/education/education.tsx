import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./education.css";
import { basePath } from "../../constant";
import { education } from "../../data/portfolio";

const contentStyle = {
  background: "var(--surface)",
  color: "var(--text)",
  border: "1px solid var(--border)",
  borderRadius: "20px",
  boxShadow: "none",
};

const Education = () => {
  return (
    <section className="section education-container" id="education">
      <span className="eyebrow">Academics</span>
      <h2 className="section-title">Education</h2>
      <VerticalTimeline lineColor="var(--border)">
        {education.map((item) => (
          <VerticalTimelineElement
            key={item.degree}
            className="vertical-timeline-element--education"
            date={item.date}
            contentStyle={contentStyle}
            contentArrowStyle={{ borderRight: "7px solid var(--border)" }}
            iconStyle={{
              backgroundImage: `url("${basePath}${item.icon}")`,
              backgroundSize: "cover",
              backgroundPosition: "50%",
              boxShadow: "0 0 0 3px var(--accent)",
            }}
          >
            <h3 className="vertical-timeline-element-title">{item.degree}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {item.school}, {item.location}
            </h4>
            <p className="edu-score">{item.score}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Education;
