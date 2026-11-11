import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Link from "../pageLink/pageLink";
import { FiMoon, FiSun } from "react-icons/fi";
import "./header.css";
import { useTheme } from "../../context/ThemeContext";
import { profile } from "../../data/portfolio";
import QuickLinks from "../quickLinks/quickLinks";

export const sections = [
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view (home page only).
  useEffect(() => {
    setActive(null);
    if (pathname !== "/" || !("IntersectionObserver" in window)) return;
    const targets = sections
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        setActive(sections.find(({ id }) => visible.has(id))?.id ?? null);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const themeLabel = isDarkMode ? "Switch to light mode" : "Switch to dark mode";

  return (
    <header className={`masthead${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap masthead-inner">
        <Link to="/" className="masthead-logo serif" onClick={() => setMenuOpen(false)}>
          {profile.name}
        </Link>
        <Link
          to={{ pathname: "/", hash: "#contact" }}
          className="masthead-role mono"
          onClick={() => setMenuOpen(false)}
        >
          <i aria-hidden="true" /> {profile.availability}
        </Link>

        <nav className="masthead-nav" aria-label="Main">
          {sections.map(({ id, label }) => (
            <Link
              key={id}
              to={{ pathname: "/", hash: `#${id}` }}
              className={`masthead-link${active === id ? " is-active" : ""}`}
              aria-current={active === id ? "location" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="masthead-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggleDarkMode}
            aria-label={themeLabel}
            title={themeLabel}
          >
            {isDarkMode ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
          <button
            type="button"
            className="menu-btn mono"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        hidden={!menuOpen}
      >
        <nav className="wrap" aria-label="Mobile">
          {sections.map(({ id, label }, i) => (
            <Link
              key={id}
              to={{ pathname: "/", hash: `#${id}` }}
              className="mobile-link display"
              style={{ "--i": i } as React.CSSProperties}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mono">0{i + 1}</span>
              {label}
            </Link>
          ))}
          <a className="mobile-mail link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <QuickLinks className="quick-links--menu mobile-quick" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
