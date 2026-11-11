import React from "react";
import Link from "../pageLink/pageLink";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import "./hero.css";
import { heroStats, milestones, profile } from "../../data/portfolio";
import QuickLinks from "../quickLinks/quickLinks";

const { lead, emphasis, rest, tail } = profile.headline;

const stats = heroStats;

// Each word rises in on load, in order.
const Word = ({ children, i }: { children: string; i: number }) => (
  <span className="hero-word" style={{ "--i": i } as React.CSSProperties}>
    {children}
  </span>
);

const words = (list: string[], offset: number) =>
  list.map((w, i) => (
    <React.Fragment key={`${w}-${i}`}>
      <Word i={offset + i}>{w}</Word>
      {i < list.length - 1 && " "}
    </React.Fragment>
  ));

const Hero = () => (
  <section className="hero" aria-labelledby="hero-title">
    <div className="wrap">
      <div className="hero-meta mono">
        <span className="hero-available">
          <i aria-hidden="true" /> {profile.availability}
        </span>
        <span>
          {profile.location}
        </span>
      </div>

      <div className="hero-top">
        <div className="hero-lead">
          <h1 id="hero-title" className="hero-title display">
            <span className="hero-main">
              {words(lead, 0)}{" "}
              <em className="hero-em">
                <Word i={lead.length}>{emphasis}</Word>
                <svg
                  className="hero-underline"
                  viewBox="0 0 300 20"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M2 14 C 60 4, 120 18, 180 9 S 270 6, 298 11" />
                </svg>
              </em>{" "}
              {words(rest, lead.length + 1)}
            </span>{" "}
            <span className="hero-tail">{tail}</span>
          </h1>

          <p className="hero-roles mono">
            {profile.roleLine.map((r, i) => (
              // Each "· item" is unbreakable and the space before it isn't, so the
              // line wraps before a separator, never leaving a dangling "·".
              <React.Fragment key={r}>
                {i > 0 && " "}
                <span className="hero-role">
                  {i > 0 && <span aria-hidden="true">· </span>}
                  {r}
                </span>
              </React.Fragment>
            ))}
          </p>

          <div className="hero-ctas">
            <Link to={{ pathname: "/", hash: "#contact" }} className="btn btn-solid">
              Let's work together <FiArrowUpRight aria-hidden="true" />
            </Link>
            <Link to={{ pathname: "/", hash: "#services" }} className="btn">
              See services <FiArrowDownRight aria-hidden="true" />
            </Link>
          </div>
          <QuickLinks className="hero-quick" />
        </div>

        <aside className="hero-aside" aria-label="At a glance">
          <dl className="hero-stats">
            {stats.map((st, i) => (
              <div key={st.label} className="hero-stat" style={{ "--i": i } as React.CSSProperties}>
                <dt className="hero-stat-value serif">{st.value}</dt>
                <dd>
                  <span className="hero-stat-label">{st.label}</span>
                  <span className="hero-stat-note">{st.note}</span>
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <p className="hero-intro">{profile.intro}</p>

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
