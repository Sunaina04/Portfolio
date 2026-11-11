import React, { useId } from "react";
import "./projectCover.css";
import { Project } from "../../data/portfolio";

const W = 800;
const H = 450;

// Two scales: "compact" is shown small (hover preview, list rows), so it uses
// much larger type relative to the canvas to stay readable once scaled down.
const SCALES = {
  full: { nodeW: 214, nodeH: 50, gapY: 70, font: 15, cols: [36, 293, 550] },
  compact: { nodeW: 246, nodeH: 62, gapY: 80, font: 19, cols: [12, 277, 542] },
};

const columnY = (count: number, gap: number) =>
  Array.from({ length: count }, (_, i) => H / 2 + (i - (count - 1) / 2) * gap);

const curve = (x1: number, y1: number, x2: number, y2: number) => {
  const dx = (x2 - x1) / 2;
  return `M${x1} ${y1} C${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};

interface ProjectCoverProps {
  project: Project;
  index: number;
  compact?: boolean;
}

// A drawn "system sketch" of the project: sources → core → results.
const ProjectCover = ({ project, index, compact }: ProjectCoverProps) => {
  const { inputs, core, outputs } = project.sketch;
  const s = compact ? SCALES.compact : SCALES.full;
  const [inX, coreX, outX] = s.cols;
  const inY = columnY(inputs.length, s.gapY);
  const coreY = columnY(core.length, s.gapY);
  const outY = columnY(outputs.length, s.gapY);
  const hub = coreY[0];
  // Covers render more than once per page (row + hover preview), so ids must be unique.
  const patternId = `dots-${useId().replace(/:/g, "")}`;
  const number = String(index + 1).padStart(2, "0");
  const description = `${project.name}: ${inputs.join(", ")} feed ${core.join(
    " and "
  )}, leading to ${outputs.join(", ")}.`;

  const node = (label: string, x: number, y: number, variant: string) => (
    <g key={label} className={`sketch-node sketch-node--${variant}`}>
      <rect x={x} y={y - s.nodeH / 2} width={s.nodeW} height={s.nodeH} rx={s.nodeH / 2} />
      <text x={x + s.nodeW / 2} y={y + s.font * 0.35} textAnchor="middle" fontSize={s.font}>
        {label}
      </text>
    </g>
  );

  return (
    <figure className={`cover${compact ? " cover--compact" : ""}`}>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Sketch of ${description}`}>
        <defs>
          <pattern id={patternId} width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" className="sketch-dot" />
          </pattern>
        </defs>
        <rect width={W} height={H} fill={`url(#${patternId})`} />

        <g className="sketch-links">
          {inY.map((y, i) => (
            <path key={`in-${i}`} d={curve(inX + s.nodeW, y, coreX, hub)} />
          ))}
          {coreY.slice(1).map((y, i) => (
            <path
              key={`core-${i}`}
              d={`M${coreX + s.nodeW / 2} ${coreY[i] + s.nodeH / 2} L${coreX + s.nodeW / 2} ${
                y - s.nodeH / 2
              }`}
            />
          ))}
          {outY.map((y, i) => (
            <path key={`out-${i}`} d={curve(coreX + s.nodeW, hub, outX, y)} />
          ))}
        </g>

        {inputs.map((label, i) => node(label, inX, inY[i], "edge"))}
        {core.map((label, i) => node(label, coreX, coreY[i], i === 0 ? "primary" : "core"))}
        {outputs.map((label, i) => node(label, outX, outY[i], "edge"))}

        <text x="24" y={compact ? 58 : 50} className="sketch-index" fontSize={compact ? 52 : 42}>
          {number}
        </text>
        {!compact && (
          <text x={W - 28} y={H - 24} textAnchor="end" className="sketch-caption">
            SKETCH — {project.name.toUpperCase()}
          </text>
        )}
      </svg>

      {/* Phones: the same sketch as stacked text, so labels keep full size */}
      {!compact && (
        <div className="sketch-stack" aria-hidden="true">
          <span className="sketch-stack-index serif">{number}</span>
          {[inputs, core, outputs].map((group, g) => (
            <React.Fragment key={g}>
              {g > 0 && <span className="sketch-stack-arrow">↓</span>}
              <ul className={`sketch-stack-row${g === 1 ? " is-core" : ""}`}>
                {group.map((label) => (
                  <li key={label}>{label}</li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </div>
      )}
    </figure>
  );
};

export default ProjectCover;
