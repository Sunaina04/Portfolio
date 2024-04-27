import React from "react";
import "./projects.css"; // Assuming "projects.css" is your external CSS file
import { useTheme } from "../../context/ThemeContext";
import ContactForm from "../contactForm/contactForm";

const Projects = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`parent-container ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <h1 className={"projectHeading"}>Projects</h1>
      <div className="projects-container">
        <div className={"project-box"}>
          <div className={"project-details"}>
            <h2>Project 1: Marina Mooring (Client Project)</h2>
            <p>
              <strong>Date:</strong> March 2024-Present
            </p>
            <p>
              <strong>Description:</strong> The "Marina Mooring Management
              Project" is a comprehensive initiative focused on optimizing the
              management of boat moorings within marinas or harbors. The project
              aims to streamline operations, enhance user experience, and
              improve overall efficiency in managing mooring facilities,
              benefiting both boat owners and marina operators.
            </p>
            <p>
              <strong>Role:</strong> React Developer
            </p>
            <img
              src="/images/icons/Moorfind.png"
              style={{ width: "140%", marginLeft: "-80px", marginTop: "30px" }}
            />
          </div>
        </div>

        <div className={"project-box"}>
          <div className={"project-details"}>
            <h2>Project 2: Surf Lokal CRM WEB (Client Project)</h2>
            <p>
              <strong>Date:</strong> Feb 2024-March 2024
            </p>
            <p>
              <strong>Description:</strong> Surf Lkal CRM Web is a specialized
              customer relationship management (CRM) platform. It offers a
              user-friendly interface and robust functionalities to streamline
              client management.
            </p>
            <p>
              <strong>Role:</strong> React Developer
            </p>
            <p>
              <strong>Responsibilities:</strong> Improved user experience by
              incorporating React elements for a responsive and dynamic UI.
            </p>
            <a href="https://devcrm.surflokal.com/surf-mlp">
              Visit Surf Lokal CRM Web
            </a>
            <img
              src="/images/icons/CRM.png"
              style={{ width: "140%", marginLeft: "-80px" }}
            />
          </div>
        </div>

        <div className={"project-box"}>
          <div className={"project-details"}>
            <h2>Project 3: Surf Lokal Property web (Client Project)</h2>
            <p>
              <strong>Date:</strong> Jan 2024-March 2024
            </p>
            <p>
              <strong>Description:</strong> Surf Lokal is a sophisticated web
              application tailored for the real estate sector, facilitating
              property listing, search, and management. As a React Developer, my
              role involved crafting intuitive frontend interfaces to enhance
              user experience.
            </p>
            <p>
              <strong>Role:</strong> React Developer
            </p>
            <p>
              <strong>Responsibilities:</strong> Improved user experience by
              incorporating React elements for a responsive and dynamic UI.
            </p>
            <a href="https://dev.surflokal.com/">
              Visit Surf Lokal Property Web
            </a>
            <img
              src="/images/icons/Surflokal.png"
              style={{
                width: "140%",
                marginTop: "30px",
                marginBottom: "-50px",
              }}
            />
          </div>
        </div>

        <div className={"project-box"}>
          <div className={"project-details"}>
            <h2>Project 4: Redscope (Client Project)</h2>
            <p>
              <strong>Date:</strong> Dec 2023-Jan 2024
            </p>
            <p>
              <strong>Description:</strong> Redscope is an electron-based
              application designed as a tracking and documentation tool for
              developers navigating through issue resolution. Seamlessly
              integrating with popular platforms like Chrome, Terminal, and
              Slack, Redscope meticulously records the step-by-step actions
              undertaken by developers during issue resolution processes.
            </p>
            <p>
              <strong>Role:</strong> Front-end Developer
            </p>
            <img
              src="/images/icons/Redscope.png"
              style={{
                width: "140%",
                marginLeft: "-80px",
              }}
            />
          </div>
        </div>

        <div className={"project-box"}>
          <div className={"project-details"}>
            <h2>Project 5: Supplier Order (Client Project)</h2>
            <p>
              <strong>Date:</strong> June 2023-Jan 2024
            </p>
            <p>
              <strong>Description:</strong> Supplier Order Management is a
              specialized variation of a B2B system, aimed at franchises and
              buying groups. It involves systematic control and coordination of
              ordering processes and inventory management.
            </p>
            <p>
              <strong>Role:</strong> Front-end Developer
            </p>
            <a href="https://supplierordermgmt.netlify.app/">
              Visit Supplier Order Management Project
            </a>
            <img
              src="/images/icons/Redington-nobg.png"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className={"project-box"}>
          <div className={"project-details"}>
            <h2>Project 6: OpenIAM (Client Project)</h2>
            <p>
              <strong>Date:</strong> Oct 2022-June 2023
            </p>
            <p>
              <strong>Description:</strong> OpenIAM is a comprehensive identity
              and access management platform empowering organizations to
              efficiently manage user identities and access permissions. As a
              Frontend React Developer, my responsibilities included enhancing
              the user interface and experience of the platform.
            </p>
            <p>
              <strong>Role:</strong> Frontend React Developer
            </p>
          </div>
        </div>

        <div className={"project-box"}>
          <div className={"project-details"}>
            <h2>Project 7: Creations & Solution</h2>
            <p>
              <strong>Duration:</strong> 4 months
            </p>
            <p>
              <strong>Description:</strong> Creations & Solution is a dynamic
              real estate website that seamlessly connects property seekers with
              their dream homes. As both a frontend and backend developer on
              this project, I contributed to the creation of a user-friendly
              platform and implemented essential features such as user
              authentication and an administrative interface.
            </p>
            <p>
              <strong>Role:</strong> Frontend and Backend Developer
            </p>
            <img
              src="/images/icons/C&S.png"
              style={{
                width: "140%",
                marginLeft: "-80px",
              }}
            />
          </div>
        </div>

        <div className={"project-box"}>
          <div className={"project-details"}>
            <h2>Project 8: Blood Bank</h2>
            <p>
              <strong>Duration:</strong> 4 months
            </p>
            <p>
              <strong>Description:</strong> The Blood Bank project is a
              lifesaving initiative aimed at creating a centralized platform for
              managing blood donation activities. I played a crucial role in
              developing both frontend and backend components to facilitate
              smooth donor registration, blood request management, and inventory
              tracking.
            </p>
            <p>
              <strong>Role:</strong> Frontend and Backend Developer
            </p>
            <img
              src="/images/icons/BloodBank.png"
              style={{
                width: "140%",
                marginLeft: "-80px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
