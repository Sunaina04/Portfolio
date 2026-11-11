import React from "react";
import { Link } from "react-router-dom";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import "./hero.css";
import { identities, milestones, profile } from "../../data/portfolio";

// Headline split into words so each can rise in on load.
const before = ["From"];
const emphasis = ["idea"];
const after = ["to", "execution."];

const Word = ({ children, i }: { children: string; i: number }) => (
  <span className="hero-word" style={{ "--i": i } as React.CSSProperties}>
    {children}
  </span>
);

const Hero = () => (
  <section className="hero" aria-labelledby="hero-title">
    <div className="wrap">
      <div className="hero-meta mono">
        <span>Portfolio · 2020 — Now</span>
        <span>
          {profile.company} · {profile.location}
        </span>
      </div>

      <h1 id="hero-title" className="hero-title display">
        {before.map((w, i) => (
          <React.Fragment key={w}>
            <Word i={i}>{w}</Word>{" "}
          </React.Fragment>
        ))}
        <em className="hero-em">
          {emphasis.map((w, i) => (
            <React.Fragment key={w}>
              {i > 0 && " "}
              <Word i={before.length + i}>{w}</Word>
            </React.Fragment>
          ))}
          <svg
            className="hero-underline"
            viewBox="0 0 300 20"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M2 14 C 60 4, 120 18, 180 9 S 270 6, 298 11" />
          </svg>
        </em>{" "}
        {after.map((w, i) => (
          <React.Fragment key={w}>
            {i > 0 && " "}
            <Word i={before.length + emphasis.length + i}>{w}</Word>
          </React.Fragment>
        ))}
      </h1>

      <ul className="hero-roles mono" aria-label="What I do">
        {identities.map((r) => (
          <li key={r.title}>{r.title}</li>
        ))}
      </ul>

      <div className="hero-foot">
        <div className="hero-copy">
          <p className="hero-promise serif">{profile.pitch}</p>
          <p className="hero-intro">{profile.intro}</p>
        </div>
        <div className="hero-now">
          <span className="mono">Currently</span>
          <p className="hero-now-role serif">
            {profile.role} at {profile.company}, since {profile.since}
          </p>
          <p className="hero-available">
            <i aria-hidden="true" /> {profile.availability}
          </p>
          <div className="hero-ctas">
            <Link to={{ pathname: "/", hash: "#contact" }} className="btn btn-solid">
              Let's work together <FiArrowUpRight aria-hidden="true" />
            </Link>
            <Link to={{ pathname: "/", hash: "#services" }} className="btn">
              Explore services <FiArrowDownRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <ol className="hero-line" aria-label="Career progression">
        {milestones.map((m, i) => (
          <li
            key={m.date}
            className={i === milestones.length - 1 ? "is-now" : undefined}
            style={{ "--i": i } as React.CSSProperties}
          >
            <span className="mono">{m.date}</span>
            <span className="hero-line-label">{m.label}</span>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Hero;
