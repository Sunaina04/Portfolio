import React, { useEffect, useRef, useState } from "react";
import "./skills.css";
import { useTheme } from "../../context/ThemeContext";
import { basePath } from "../../constant";

const Skills = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (skillsRef.current) {
        const top = skillsRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setShouldAnimate(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`skills-container ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <div
        ref={skillsRef}
        className={`skills-container ${shouldAnimate ? "animate" : ""}`}
      >
        <h1 style={{ marginBottom: "10px" }}>Skills</h1>
        <div className="category">
          <h5>Languages</h5>
          <div className="skill-box">
            <p>
              <img
                src={basePath + "./images/icons/c++.svg"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              C++
            </p>

            <p>
              <img
                src={ basePath +"./images/icons/css.svg"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              CSS
            </p>
            <p>
              <img
                src={ basePath +"./images/icons/javascript.gif"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              Javascript
            </p>

            <p>
              <img
                src={ basePath +"./images/icons/java.gif"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />{" "}
              Java
            </p>
            <p>
              <img
                src={ basePath +"./images/icons/typescript.svg"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              Typescript
            </p>
            <p>
              <img
                src={ basePath +"./images/icons/html5.png"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              HTML5
            </p>
          </div>
        </div>
        <div className="category">
          <h5>Libraries and frameworks</h5>
          <div className="skill-box">
            <p>
              <img
                src={ basePath +"./images/icons/logo.svg"}
                alt="logo"
                style={{ width: "25px" }}
              />
              Reactjs
            </p>
            <p>
              <img
                src={ basePath +"./images/icons/react-router.svg"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              React-router-dom
            </p>
            <p>
              <img
                src={ basePath +"./images/icons/redux.png"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              Redux
            </p>
            <p>
              <img
                src={ basePath +"./images/icons/mui.png"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              MUI
            </p>
            <p>
              <img
                src={ basePath +"./images/icons/mongoose.png"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              Mongoose
            </p>
            <p>
              <img
                src={ basePath +"./images/icons/jest.png"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              Jest
            </p>
            </div>
            <div className="skill-box" style={{marginTop :"10px"}} >
            <p>
              <img
                src={ basePath +"./images/icons/enzyme.png"}
                alt="logo"
                style={{
                  width: "15px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              Enzyme
            </p>
            <p>
              <img
                src={ basePath +"./images/icons/recharts.png"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              Recharts
            </p>
            <p>
              <img
                src={ basePath +"./images/icons/chart.js"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              Chart JS
            </p>
            <p>
              <img
                src={ basePath +"./images/icons/lodash.png"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              lodash
            </p>
            <p>
              <img
                src={ basePath +"./images/icons/JWT.svg"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              JsonWebToken
            </p>
            <p>
              <img
                src={ basePath +"./images/icons/jquery.png"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              JQuery
            </p>
          </div>
        </div>
        <div className="category">
          <h5>Database</h5>
          <div className="skill-box">
            <p>
              <img
                src={ basePath +"./images/icons/mongodb.svg"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              MongoDB
            </p>
            <p>
              <img
                src={ basePath +"./images/icons/postgresql.svg"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              PostreSQL
            </p>
            <p>
              <img
                src={ basePath +"./images/icons/sql.png"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              MySQL
            </p>
          </div>
        </div>
        <div className="category">
          <h5>Tools and technologies</h5>
          <div className="skill-box">
            <p>
              <img
                src={ basePath +"./images/icons/git.svg"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              Git
            </p>
            <p>
              <img
                src={ basePath +"./images/icons/github.gif"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              Github
            </p>
            <p>
              <img
                src={ basePath +"./images/icons/docker.svg"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              Docker
            </p>
            <p>
              <img
                src={ basePath +"./images/icons/postman.png"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              Postman
            </p>
            <p>
              <img
                src={ basePath +"./images/icons/visual-studio.svg"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              Vscode
            </p>
            <p>
              <img
                src={ basePath +"./images/icons/intellij-idea.svg"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              IntelliJ
            </p>
            <p>
              <img
                src={ basePath +"./images/icons/figma.gif"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              Figma
            </p>
            <p>
              <img
                src={ basePath +"./images/icons/ubuntu.png"}
                alt="logo"
                style={{
                  width: "20px",
                  marginBottom: "-2px",
                  marginRight: "5px",
                }}
              />
              Ubuntu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
