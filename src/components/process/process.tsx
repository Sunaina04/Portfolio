import React from "react";
import Link from "../pageLink/pageLink";
import { FiArrowUpRight } from "react-icons/fi";
import "./process.css";
import { ModeTag } from "../services/services";
import { processSteps, profile } from "../../data/portfolio";

const Process = () => (
  <section id="process" className="section process" aria-labelledby="process-title">
    <div className="wrap process-grid">
      <div className="process-aside">
        <p className="section-head-label mono">
          <span>(03)</span> How I work
        </p>
        <h2 id="process-title" className="process-title display" data-reveal>
          From first call to <em>launch.</em>
        </h2>
        <p className="process-promise">{profile.pitch}</p>
        <Link to={{ pathname: "/", hash: "#contact" }} className="btn">
          Start a conversation <FiArrowUpRight aria-hidden="true" />
        </Link>
      </div>

      <ol className="process-steps">
        {processSteps.map((step, i) => (
          <li key={step.title} className="process-step" data-reveal>
            <span className="process-num serif">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="process-step-title display">{step.title}</h3>
              <p className="process-step-text">{step.text}</p>
              {step.mode && <ModeTag mode={step.mode} />}
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Process;
