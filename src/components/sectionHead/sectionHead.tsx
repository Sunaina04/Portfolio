import React, { ReactNode } from "react";
import "./sectionHead.css";

interface SectionHeadProps {
  index: string;
  label: string;
  title: ReactNode;
  id?: string;
  children?: ReactNode;
}

// Two-column editorial heading: numbered label left, display title right.
const SectionHead = ({ index, label, title, id, children }: SectionHeadProps) => (
  <div className="section-head">
    <p className="section-head-label mono">
      <span>({index})</span> {label}
    </p>
    <div className="section-head-main">
      <h2 className="section-head-title display" id={id} data-reveal>
        {title}
      </h2>
      {children && (
        <div className="section-head-lead" data-reveal style={{ "--delay": "0.1s" } as React.CSSProperties}>
          {children}
        </div>
      )}
    </div>
  </div>
);

export default SectionHead;
