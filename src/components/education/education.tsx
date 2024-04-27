import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./education.css";
import { useTheme } from "../../context/ThemeContext";
import ContactForm from "../contactForm/contactForm";

const Education = () => {
  const { isDarkMode } = useTheme();
  const contentStyle = isDarkMode ? { background: "black", color: "#fff" } : { background: "white", color: "black" };

  return (
    <div
      className={`education-container ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
    >
      {" "}
      <h1>Education</h1>
      <VerticalTimeline lineColor={isDarkMode ? "white" : "black"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2020 - May 2022"
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: "7px solid  rgb(53, 53, 53)" }}
          iconStyle={{
            backgroundImage: `url("/images/icons/gndu.png")`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
            width: "50px",
            height: "50px",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Masters in Computer Applications (MCA)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Guru Nanak Dev University, Amritsar
          </h4>
          <p>
            Pursuing a Master's degree in Computer Applications at Guru Nanak
            Dev University, Amritsar.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2017 - May 2020"
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: "7px solid  rgb(53, 53, 53)" }}
          iconStyle={{
            backgroundImage: `url("/images/icons/gndu.png")`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
            width: "50px",
            height: "50px",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelors in Computer Applications (BCA)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Guru Nanak Dev University, Amritsar
          </h4>
          <p>
            Completed Bachelor's degree in Computer Applications from Guru Nanak
            Dev University, Amritsar.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2015 - April 2017"
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: "7px solid  rgb(53, 53, 53)" }}
          iconStyle={{
            backgroundImage: `url("/images/icons/school.jpeg")`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
            width: "50px",
            height: "50px",
          }}
        >
          <h3 className="vertical-timeline-element-title">Intermediate</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Govt. Girl's Senior Secondary School
          </h4>
          <p>
            Completed Intermediate education at Govt. Girl's Senior Secondary
            School.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2014 - April 2015"
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: "7px solid  rgb(53, 53, 53)" }}
          iconStyle={{
            backgroundImage: `url("/images/icons/schoolTangra.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
            width: "50px",
            height: "50px",
          }}
        >
          <h3 className="vertical-timeline-element-title">High School</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Shaheed Gehal Singh Memorial School
          </h4>
          <p>
            Completed High School education at Shaheed Gehal Singh Memorial
            School.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
