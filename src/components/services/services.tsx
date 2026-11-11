import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const Services = () => {
  const [open, setOpen] = useState<string | null>(services[0].id);

  return (
    <section id="services" className="section services" aria-labelledby="services-title">
      <div className="wrap">
        <SectionHead
          index="02"
          label="What I do"
          id="services-title"
          title={
            <>
              Services for businesses with <em>something to build.</em>
            </>
          }
        >
          <p>
            Alongside my full-time role, I take on independent projects. Each service below says
            plainly who does the work — me, or specialists I bring in and coordinate.
          </p>
        </SectionHead>

        <ul className="mode-legend" aria-label="Who does the work">
          {(Object.keys(deliveryModes) as DeliveryMode[]).map((m) => (
            <li key={m}>
              <ModeTag mode={m} />
            </li>
          ))}
        </ul>

        <ol className="service-list">
          {services.map((service) => {
            const isOpen = open === service.id;
            const panelId = `service-${service.id}`;
            return (
              <li key={service.id} className={`service${isOpen ? " is-open" : ""}`} data-reveal>
                <h3 className="service-heading">
                  <button
                    type="button"
                    className="service-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : service.id)}
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
                        </div>
                      )}
                      <Link
                        to={{ pathname: "/", search: `?service=${service.id}`, hash: "#contact" }}
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
          })}
        </ol>

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
