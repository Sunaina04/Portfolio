import React, { useState } from "react";
import Link from "../pageLink/pageLink";
import { FiArrowUpRight, FiPlus } from "react-icons/fi";
import "./services.css";
import SectionHead from "../sectionHead/sectionHead";
import { DeliveryMode, deliveryModes, services } from "../../data/portfolio";

export const ModeTag = ({ mode }: { mode: DeliveryMode }) => (
  <span className={`mode-tag mode-tag--${mode} mono`}>
    <i aria-hidden="true" />
    {deliveryModes[mode]}
  </span>
);

type ServiceType = (typeof services)[number];

const RelatedLinks = ({ service }: { service: ServiceType }) =>
  service.related ? (
    <ul className="service-related">
      {service.related.map((r) => (
        <li key={r.label}>
          {r.external ? (
            <a href={r.to} target="_blank" rel="noreferrer" className="link">
              {r.label}
            </a>
          ) : (
            <Link to={r.to} className="link">
              {r.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  ) : null;

const discussLink = (id: string) => ({ pathname: "/", search: `?service=${id}`, hash: "#contact" });

interface RowProps {
  service: ServiceType;
  isOpen: boolean;
  onToggle: () => void;
}

// A full accordion row, used for the core and network services.
const ServiceRow = ({ service, isOpen, onToggle }: RowProps) => {
  const panelId = `service-${service.id}`;
  return (
    <li className={`service${isOpen ? " is-open" : ""}`} data-reveal>
      <h3 className="service-heading">
        <button
          type="button"
          className="service-trigger"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="service-letter serif">{service.letter}</span>
          <span className="service-title display">{service.title}</span>
          <span className="service-benefit">{service.benefit}</span>
          <span className="service-toggle" aria-hidden="true">
            <FiPlus />
          </span>
        </button>
      </h3>

      <div id={panelId} className="service-panel" role="region" aria-label={service.title}>
        <div className="service-panel-inner">
          <div className="service-detail">
            <p className="mono">What's included</p>
            <ul className="service-items">
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="service-side">
            <div>
              <p className="mono">Who does the work</p>
              <ModeTag mode={service.mode} />
            </div>
            {service.note && <p className="service-note">{service.note}</p>}
            {service.related && (
              <div>
                <p className="mono">Related work</p>
                <RelatedLinks service={service} />
              </div>
            )}
            <Link
              to={discussLink(service.id)}
              className="btn btn-solid service-cta"
              tabIndex={isOpen ? undefined : -1}
            >
              Discuss this service <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

const Services = () => {
  const [open, setOpen] = useState<string | null>(services[0].id);
  const toggle = (id: string) => setOpen((current) => (current === id ? null : id));
  const tier = (t: ServiceType["tier"]) => services.filter((s) => s.tier === t);

  return (
    <section id="services" className="section services" aria-labelledby="services-title">
      <div className="wrap">
        <SectionHead
          index="01"
          label="What I do"
          id="services-title"
          title={
            <>
              What I can do for <em>your business.</em>
            </>
          }
        >
          <p>
            Alongside my full-time role, I take on independent projects. Three core services I
            lead myself, one I run through my network, and two I also offer — each says plainly
            who does the work.
          </p>
        </SectionHead>

        <ul className="mode-legend" aria-label="Who does the work">
          {(Object.keys(deliveryModes) as DeliveryMode[]).map((m) => (
            <li key={m}>
              <ModeTag mode={m} />
            </li>
          ))}
        </ul>

        <h3 className="tier-label mono">Core services</h3>
        <ol className="service-list">
          {tier("core").map((service) => (
            <ServiceRow
              key={service.id}
              service={service}
              isOpen={open === service.id}
              onToggle={() => toggle(service.id)}
            />
          ))}
        </ol>

        <h3 className="tier-label mono">Through my network</h3>
        <ol className="service-list">
          {tier("network").map((service) => (
            <ServiceRow
              key={service.id}
              service={service}
              isOpen={open === service.id}
              onToggle={() => toggle(service.id)}
            />
          ))}
        </ol>

        <h3 className="tier-label mono">Also available</h3>
        <ul className="extras">
          {tier("extra").map((service) => (
            <li key={service.id} className="extra" data-reveal>
              <div className="extra-head">
                <span className="service-letter serif">{service.letter}</span>
                <h4 className="extra-title display">{service.title}</h4>
              </div>
              <p className="extra-benefit">{service.benefit}</p>
              <p className="extra-items">{service.items.join(" · ")}</p>
              {service.note && <p className="service-note">{service.note}</p>}
              <div className="extra-foot">
                <ModeTag mode={service.mode} />
                <RelatedLinks service={service} />
                <Link to={discussLink(service.id)} className="link extra-cta">
                  Discuss this <FiArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <div className="services-cta" data-reveal>
          <p className="services-cta-text serif">
            Not sure which you need? Tell me about the idea — I'll suggest the right approach.
          </p>
          <Link to={{ pathname: "/", hash: "#contact" }} className="btn btn-solid">
            Let's build something together <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
