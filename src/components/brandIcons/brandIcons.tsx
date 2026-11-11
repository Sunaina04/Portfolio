import React from "react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import "./brandIcons.css";

type Props = { className?: string; "aria-hidden"?: boolean | "true" };

// The apps' own marks: white glyph on the brand colour, shaped like the app icon.
export const WhatsAppLogo = ({ className = "", ...rest }: Props) => (
  <span className={`brand-icon brand-icon--whatsapp ${className}`} {...rest}>
    <FaWhatsapp />
  </span>
);

export const LinkedInLogo = ({ className = "", ...rest }: Props) => (
  <span className={`brand-icon brand-icon--linkedin ${className}`} {...rest}>
    <FaLinkedinIn />
  </span>
);
