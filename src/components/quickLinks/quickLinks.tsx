import React from "react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import "./quickLinks.css";
import { basePath } from "../../constant";
import { profile } from "../../data/portfolio";
import { whatsappUrl } from "../contactForm/delivery";

const greeting = `Hi ${profile.name}, I found your portfolio and would like to talk about a project.`;

// Resume, LinkedIn, WhatsApp (and Instagram once a handle is set), as a quiet
// row of text links. Used under the hero buttons and in the phone menu.
export const quickLinks = () =>
  [
    {
      label: "Resume",
      href: basePath + profile.resume,
      Icon: FiDownload,
      hint: "PDF",
      download: "Sunaina_Resume.pdf",
    },
    { label: "LinkedIn", href: profile.linkedin, Icon: FaLinkedinIn },
    { label: "WhatsApp", href: whatsappUrl(greeting), Icon: FaWhatsapp },
    profile.instagram && {
      label: "Instagram",
      href: `https://www.instagram.com/${profile.instagram}/`,
      Icon: FaInstagram,
    },
  ].filter(Boolean) as {
    label: string;
    href: string;
    Icon: React.ComponentType<{ "aria-hidden"?: boolean }>;
    hint?: string;
    download?: string;
  }[];

const QuickLinks = ({ className = "" }: { className?: string }) => (
  <ul className={`quick-links ${className}`} aria-label="Resume and profiles">
    {quickLinks().map(({ label, href, Icon, hint, download }) => (
      <li key={label}>
        <a
          href={href}
          className="quick-link"
          {...(download ? { download } : { target: "_blank", rel: "noreferrer" })}
        >
          <Icon aria-hidden />
          <span>{label}</span>
          {hint && <span className="quick-link-hint mono">{hint}</span>}
        </a>
      </li>
    ))}
  </ul>
);

export default QuickLinks;
